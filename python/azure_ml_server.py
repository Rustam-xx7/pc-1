"""
Azure ML Flask Server for Hand Gesture Recognition
Receives landmark data from client and processes with ML model
"""
from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib
import json
import logging
from datetime import datetime

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Global variables for model
model = None
scaler = None
gesture_names = []
metadata = {}

# Load ML model
def load_model():
    """Load the trained model and related files"""
    global model, scaler, gesture_names, metadata
    
    try:
        model = joblib.load('hand_dataset/hand_gesture_model.pkl')
        scaler = joblib.load('hand_dataset/scaler.pkl')
        
        with open('hand_dataset/model_metadata.json', 'r') as f:
            metadata = json.load(f)
        
        gesture_names = metadata.get('gesture_names', [])
        
        logger.info(f"✓ Model loaded successfully")
        logger.info(f"✓ Available gestures: {gesture_names}")
        logger.info(f"✓ Model accuracy: {metadata.get('test_accuracy', 'N/A')}")
        return True
    
    except FileNotFoundError as e:
        logger.error(f"✗ Model files not found: {str(e)}")
        logger.error("  Make sure to train the model first using train_model.py")
        return False
    except Exception as e:
        logger.error(f"✗ Error loading model: {str(e)}")
        return False


def predict_gesture_from_landmarks(landmarks):
    """
    Predict gesture from landmark array
    landmarks: numpy array of shape (63,) - 21 landmarks * 3 coordinates
    """
    if model is None or scaler is None:
        return None, 0.0, "Model not loaded"
    
    try:
        # Ensure correct shape
        landmarks = np.array(landmarks).reshape(1, -1)
        
        # Scale landmarks
        landmarks_scaled = scaler.transform(landmarks)
        
        # Get prediction
        prediction = model.predict(landmarks_scaled)[0]
        probabilities = model.predict_proba(landmarks_scaled)[0]
        confidence = float(max(probabilities))
        
        gesture = gesture_names[int(prediction)]
        
        return gesture, confidence, None
    
    except Exception as e:
        logger.error(f"Prediction error: {str(e)}")
        return None, 0.0, str(e)


def process_two_hand_gesture(left_landmarks, right_landmarks):
    """
    Process gestures involving both hands
    This is for sign language that requires two hands
    """
    # Combine landmarks from both hands
    combined_landmarks = np.concatenate([left_landmarks, right_landmarks])
    
    # For now, predict on each hand separately
    # You can train a specific model for two-hand gestures
    left_gesture, left_conf, left_err = predict_gesture_from_landmarks(left_landmarks)
    right_gesture, right_conf, right_err = predict_gesture_from_landmarks(right_landmarks)
    
    if left_err or right_err:
        return None, 0.0, "Error in two-hand prediction"
    
    # Combine results (you can customize this logic)
    if left_conf > right_conf:
        return f"{left_gesture} (Left dominant)", left_conf, None
    else:
        return f"{right_gesture} (Right dominant)", right_conf, None


@app.route('/health', methods=['GET'])
def health():
    """Health check endpoint"""
    model_status = "loaded" if model is not None else "not_loaded"
    return jsonify({
        'status': 'healthy',
        'model_status': model_status,
        'gesture_names': gesture_names,
        'timestamp': datetime.now().isoformat()
    })


@app.route('/predict', methods=['POST'])
def predict():
    """
    Main prediction endpoint
    Expects JSON: {
        'hands': [
            {'landmarks': [x,y,z,...], 'handedness': 'Left'/'Right'},
            ...
        ]
    }
    """
    try:
        if model is None:
            return jsonify({
                'error': 'Model not loaded',
                'gesture': 'Model Error',
                'confidence': 0.0
            }), 500
        
        data = request.get_json()
        
        if 'hands' not in data:
            return jsonify({
                'error': 'No hands data provided',
                'gesture': 'No Input',
                'confidence': 0.0
            }), 400
        
        hands_data = data['hands']
        
        if len(hands_data) == 0:
            return jsonify({
                'gesture': 'No hands detected',
                'confidence': 0.0,
                'hands_count': 0
            })
        
        # Process based on number of hands
        if len(hands_data) == 1:
            # Single hand gesture
            hand = hands_data[0]
            landmarks = hand['landmarks']
            handedness = hand.get('handedness', 'Unknown')
            
            gesture, confidence, error = predict_gesture_from_landmarks(landmarks)
            
            if error:
                return jsonify({
                    'error': error,
                    'gesture': 'Prediction Error',
                    'confidence': 0.0
                }), 500
            
            return jsonify({
                'gesture': gesture,
                'confidence': confidence,
                'handedness': handedness,
                'hands_count': 1,
                'all_gestures': gesture_names
            })
        
        else:
            # Two hands detected
            # Separate left and right hands
            left_hand = None
            right_hand = None
            
            for hand in hands_data:
                if hand.get('handedness') == 'Left':
                    left_hand = hand['landmarks']
                elif hand.get('handedness') == 'Right':
                    right_hand = hand['landmarks']
            
            if left_hand is not None and right_hand is not None:
                # Process two-hand gesture
                gesture, confidence, error = process_two_hand_gesture(
                    left_hand, right_hand
                )
                
                if error:
                    return jsonify({
                        'error': error,
                        'gesture': 'Prediction Error',
                        'confidence': 0.0
                    }), 500
                
                return jsonify({
                    'gesture': gesture,
                    'confidence': confidence,
                    'hands_count': 2,
                    'type': 'two_hand_gesture',
                    'all_gestures': gesture_names
                })
            else:
                # Process individual hands
                # Take the hand with higher confidence
                predictions = []
                for hand in hands_data:
                    landmarks = hand['landmarks']
                    handedness = hand.get('handedness', 'Unknown')
                    gesture, confidence, error = predict_gesture_from_landmarks(landmarks)
                    if not error:
                        predictions.append({
                            'gesture': gesture,
                            'confidence': confidence,
                            'handedness': handedness
                        })
                
                if predictions:
                    # Return highest confidence prediction
                    best = max(predictions, key=lambda x: x['confidence'])
                    return jsonify({
                        'gesture': best['gesture'],
                        'confidence': best['confidence'],
                        'handedness': best['handedness'],
                        'hands_count': len(hands_data),
                        'all_predictions': predictions,
                        'all_gestures': gesture_names
                    })
                else:
                    return jsonify({
                        'error': 'Failed to predict any hand',
                        'gesture': 'Prediction Failed',
                        'confidence': 0.0
                    }), 500
    
    except Exception as e:
        logger.error(f"Error in predict endpoint: {str(e)}")
        return jsonify({
            'error': str(e),
            'gesture': 'Server Error',
            'confidence': 0.0
        }), 500


@app.route('/gestures', methods=['GET'])
def get_gestures():
    """Get list of available gestures"""
    return jsonify({
        'gestures': gesture_names,
        'count': len(gesture_names)
    })


@app.route('/model/info', methods=['GET'])
def model_info():
    """Get detailed model information"""
    if model is None:
        return jsonify({'error': 'Model not loaded'}), 500
    
    return jsonify({
        'model_type': metadata.get('model_type', 'Unknown'),
        'n_features': metadata.get('n_features', 'Unknown'),
        'n_classes': metadata.get('n_classes', 'Unknown'),
        'train_accuracy': metadata.get('train_accuracy', 'Unknown'),
        'test_accuracy': metadata.get('test_accuracy', 'Unknown'),
        'gesture_names': gesture_names,
        'training_date': metadata.get('training_date', 'Unknown')
    })


if __name__ == '__main__':
    print("="*70)
    print(" Azure ML Flask Server for Hand Gesture Recognition")
    print("="*70)
    
    # Load model
    if load_model():
        print(f"\n✓ Server ready with {len(gesture_names)} gestures")
        print(f"\nEndpoints:")
        print(f"  GET  /health       - Health check")
        print(f"  GET  /gestures     - List available gestures")
        print(f"  GET  /model/info   - Model information")
        print(f"  POST /predict      - Predict gesture from landmarks")
        print(f"\nStarting server on http://127.0.0.1:5001")
        print("="*70)
        
        app.run(debug=True, host='127.0.0.1', port=5001, threaded=True)
    else:
        print("\n✗ Failed to load model. Please train the model first.")
        print("  Run: python train_model.py")
        print("="*70)
