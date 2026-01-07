"""
Train Hand Gesture Recognition Model
Uses existing dataset from hand_dataset folder
"""
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import classification_report, accuracy_score
import joblib
import json
import os
from datetime import datetime

def load_dataset():
    """Load the dataset from hand_dataset folder"""
    # Try multiple locations
    possible_paths = [
        'hand_dataset',
        '../hand_dataset',
        '../../hand_dataset',
        'D:/CODING/hand_dataset'
    ]
    
    dataset_path = None
    for path in possible_paths:
        if os.path.exists(os.path.join(path, 'hand_landmarks.npy')):
            dataset_path = path
            break
    
    if dataset_path is None:
        raise FileNotFoundError("Could not find hand_dataset folder")
    
    print(f"Loading dataset from: {dataset_path}")
    
    # Load data
    landmarks = np.load(os.path.join(dataset_path, 'hand_landmarks.npy'))
    labels = np.load(os.path.join(dataset_path, 'hand_labels.npy'))
    
    with open(os.path.join(dataset_path, 'gesture_names.json'), 'r') as f:
        gesture_data = json.load(f)
        gesture_names = gesture_data if isinstance(gesture_data, list) else gesture_data.get('gestures', [])
    
    print(f"✓ Loaded {len(landmarks)} samples")
    print(f"✓ Found {len(gesture_names)} gesture classes: {gesture_names}")
    print(f"✓ Feature shape: {landmarks.shape}")
    
    return landmarks, labels, gesture_names


def train_model():
    """Train the gesture recognition model"""
    print("="*70)
    print("Training Hand Gesture Recognition Model")
    print("="*70)
    
    # Load dataset
    X, y, gesture_names = load_dataset()
    
    # Split data
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )
    
    print(f"\nTraining samples: {len(X_train)}")
    print(f"Testing samples: {len(X_test)}")
    
    # Scale features
    print("\nScaling features...")
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)
    
    # Train model
    print("\nTraining Random Forest Classifier...")
    model = RandomForestClassifier(
        n_estimators=200,
        max_depth=20,
        min_samples_split=5,
        min_samples_leaf=2,
        random_state=42,
        n_jobs=-1
    )
    
    model.fit(X_train_scaled, y_train)
    print("✓ Model trained!")
    
    # Evaluate
    print("\nEvaluating model...")
    train_pred = model.predict(X_train_scaled)
    test_pred = model.predict(X_test_scaled)
    
    train_accuracy = accuracy_score(y_train, train_pred)
    test_accuracy = accuracy_score(y_test, test_pred)
    
    print(f"\nTraining Accuracy: {train_accuracy:.4f} ({train_accuracy*100:.2f}%)")
    print(f"Testing Accuracy: {test_accuracy:.4f} ({test_accuracy*100:.2f}%)")
    
    print("\nClassification Report:")
    print(classification_report(y_test, test_pred, target_names=gesture_names))
    
    # Create hand_dataset folder in current directory
    os.makedirs('hand_dataset', exist_ok=True)
    
    # Save model
    print("\nSaving model files...")
    joblib.dump(model, 'hand_dataset/hand_gesture_model.pkl')
    joblib.dump(scaler, 'hand_dataset/scaler.pkl')
    
    # Save metadata
    metadata = {
        'model_type': 'RandomForestClassifier',
        'n_features': X.shape[1],
        'n_classes': len(gesture_names),
        'gesture_names': gesture_names,
        'train_accuracy': float(train_accuracy),
        'test_accuracy': float(test_accuracy),
        'training_date': datetime.now().isoformat(),
        'n_estimators': 200
    }
    
    with open('hand_dataset/model_metadata.json', 'w') as f:
        json.dump(metadata, f, indent=2)
    
    # Copy gesture names
    with open('hand_dataset/gesture_names.json', 'w') as f:
        json.dump({'gestures': gesture_names}, f, indent=2)
    
    print("✓ Model saved to hand_dataset/")
    print("  - hand_gesture_model.pkl")
    print("  - scaler.pkl")
    print("  - model_metadata.json")
    print("  - gesture_names.json")
    
    print("\n" + "="*70)
    print("Training Complete!")
    print("="*70)
    print(f"Model accuracy: {test_accuracy*100:.2f}%")
    print("You can now run: python azure_ml_server.py")
    print("="*70)


if __name__ == '__main__':
    try:
        train_model()
    except Exception as e:
        print(f"\n❌ Error: {str(e)}")
        import traceback
        traceback.print_exc()
