"""
Hand Gesture Recognition with Azure ML Integration
Tracks both hands using MediaPipe and sends landmarks to Azure ML for gesture detection
"""
import cv2
import mediapipe as mp
import time
import numpy as np
import requests
import json
from collections import deque

# Azure ML Flask API endpoint (update with your Azure ML endpoint)
AZURE_ML_ENDPOINT = "http://127.0.0.1:5001/predict"  # Change to your Azure endpoint

# Open webcam
cap = cv2.VideoCapture(0)
cap.set(cv2.CAP_PROP_FRAME_WIDTH, 1280)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 720)

# MediaPipe Hands - configured for BOTH hands
mp_hands = mp.solutions.hands
hands = mp_hands.Hands(
    static_image_mode=False,
    max_num_hands=2,  # Track both hands
    min_detection_confidence=0.7,
    min_tracking_confidence=0.7
)

mp_draw = mp.solutions.drawing_utils

# Variables for gesture display
gesture_text = "No gesture detected"
confidence = 0.0
hand_count = 0
prev_time = 0

# Smoothing predictions
prediction_history = deque(maxlen=5)

# Performance optimization - only send requests every N frames
frame_skip = 3  # Send to ML every 3 frames
frame_counter = 0
last_ml_response = None


def extract_hand_data(hand_landmarks, handedness):
    """
    Extract complete landmark data for one hand
    Returns: dict with landmarks (x,y,z) and handedness
    """
    landmarks = []
    for lm in hand_landmarks.landmark:
        landmarks.extend([lm.x, lm.y, lm.z])  # Include z-coordinate
    
    return {
        'landmarks': landmarks,
        'handedness': handedness  # 'Left' or 'Right'
    }


def send_to_azure_ml(hands_data):
    """
    Send hand landmark data to Azure ML via Flask API
    Returns: prediction response
    """
    try:
        payload = {
            'hands': hands_data,
            'timestamp': time.time()
        }
        
        response = requests.post(
            AZURE_ML_ENDPOINT,
            json=payload,
            timeout=0.1  # Very quick timeout for real-time (100ms)
        )
        
        if response.status_code == 200:
            return response.json()
        else:
            return {'error': f'Status {response.status_code}'}
    
    except requests.exceptions.Timeout:
        return {'error': 'Timeout', 'use_last': True}
    except requests.exceptions.ConnectionError:
        return {'error': 'Connection failed - Is Azure ML server running?', 'use_last': True}
    except Exception as e:
        return {'error': str(e), 'use_last': True}


def draw_info_panel(frame, gesture, confidence, hand_count, fps):
    """Draw information overlay on frame"""
    # Semi-transparent background
    overlay = frame.copy()
    cv2.rectangle(overlay, (10, 10), (400, 150), (0, 0, 0), -1)
    cv2.addWeighted(overlay, 0.6, frame, 0.4, 0, frame)
    
    # Text information
    cv2.putText(frame, f"Gesture: {gesture}", (20, 40),
                cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 0), 2)
    cv2.putText(frame, f"Confidence: {confidence:.2%}", (20, 70),
                cv2.FONT_HERSHEY_SIMPLEX, 0.6, (255, 255, 0), 2)
    cv2.putText(frame, f"Hands Detected: {hand_count}", (20, 100),
                cv2.FONT_HERSHEY_SIMPLEX, 0.6, (255, 255, 255), 2)
    cv2.putText(frame, f"FPS: {int(fps)}", (20, 130),
                cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 255, 255), 2)


print("="*60)
print("Hand Gesture Recognition with Azure ML")
print("="*60)
print(f"Azure ML Endpoint: {AZURE_ML_ENDPOINT}")
print("\nControls:")
print("  ESC - Exit")
print("  'q' - Quit")
print("\nStarting webcam...")
print("="*60)

while True:
    success, frame = cap.read()
    if not success:
        break

    # Flip for mirror view
    frame = cv2.flip(frame, 1)

    # Convert BGR to RGB for MediaPipe
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    # Process hands
    result = hands.process(rgb_frame)

    # Extract data from both hands if detected
    if result.multi_hand_landmarks and result.multi_handedness:
        hands_data = []
        hand_count = len(result.multi_hand_landmarks)
        
        # Process each detected hand
        for idx, (hand_landmarks, handedness_info) in enumerate(
            zip(result.multi_hand_landmarks, result.multi_handedness)
        ):
            # Get handedness (Left/Right)
            handedness = handedness_info.classification[0].label
            
            # Extract landmark data
            hand_data = extract_hand_data(hand_landmarks, handedness)
            hands_data.append(hand_data)
            
            # Draw landmarks on frame
            mp_draw.draw_landmarks(
                frame,
                hand_landmarks,
                mp_hands.HAND_CONNECTIONS,
                mp_draw.DrawingSpec(color=(0, 255, 0), thickness=2, circle_radius=2),
                mp_draw.DrawingSpec(color=(255, 0, 0), thickness=2)
            )
            
            # Label hand
            h, w, c = frame.shape
            cx = int(hand_landmarks.landmark[0].x * w)
            cy = int(hand_landmarks.landmark[0].y * h)
            cv2.putText(frame, handedness, (cx - 30, cy - 20),
                       cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 0, 255), 2)
        
        # Only send to Azure ML every N frames to maintain FPS
        if frame_counter % frame_skip == 0:
            response = send_to_azure_ml(hands_data)
            
            if 'error' not in response:
                gesture_text = response.get('gesture', 'Unknown')
                confidence = response.get('confidence', 0.0)
                last_ml_response = {'gesture': gesture_text, 'confidence': confidence}
                
                # Smooth predictions
                prediction_history.append(gesture_text)
                if len(prediction_history) >= 3:
                    # Use most common prediction
                    from collections import Counter
                    gesture_text = Counter(prediction_history).most_common(1)[0][0]
            elif response.get('use_last') and last_ml_response:
                # Use last successful response if timeout/connection error
                gesture_text = last_ml_response['gesture']
                confidence = last_ml_response['confidence']
            else:
                gesture_text = f"Error: {response['error']}"
                confidence = 0.0
        elif last_ml_response:
            # Use cached prediction between ML calls
            gesture_text = last_ml_response['gesture']
            confidence = last_ml_response['confidence']
        
        frame_counter += 1
    else:
        hand_count = 0
        gesture_text = "No hands detected"
        confidence = 0.0
        frame_counter = 0  # Reset counter when no hands
    
    # Calculate FPS
    current_time = time.time()
    fps = 1 / (current_time - prev_time) if prev_time > 0 else 0
    prev_time = current_time
    
    # Draw information panel
    draw_info_panel(frame, gesture_text, confidence, hand_count, fps)
    
    # Display frame
    cv2.imshow("Hand Gesture Recognition - Azure ML", frame)

    # Exit controls
    key = cv2.waitKey(1) & 0xFF
    if key == 27 or key == ord('q'):  # ESC or 'q' to exit
        break

# Cleanup
cap.release()
cv2.destroyAllWindows()
print("\nApplication closed.")
