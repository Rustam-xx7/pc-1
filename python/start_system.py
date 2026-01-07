"""
Quick Start Script - Launch both server and client
"""
import subprocess
import time
import sys
import os

def check_dependencies():
    """Check if required packages are installed"""
    required = ['cv2', 'mediapipe', 'flask', 'requests', 'numpy', 'joblib']
    missing = []
    
    for package in required:
        try:
            __import__(package)
        except ImportError:
            missing.append(package)
    
    if missing:
        print("❌ Missing dependencies:")
        for pkg in missing:
            print(f"   - {pkg}")
        print("\nInstall with: pip install -r requirements_integration.txt")
        return False
    
    print("✅ All dependencies installed")
    return True


def check_model():
    """Check if model files exist"""
    files = [
        'hand_dataset/hand_gesture_model.pkl',
        'hand_dataset/scaler.pkl',
        'hand_dataset/model_metadata.json'
    ]
    
    for file in files:
        if not os.path.exists(file):
            print(f"❌ Model file missing: {file}")
            print("\nTrain the model first: python train_model.py")
            return False
    
    print("✅ Model files found")
    return True


def start_server():
    """Start Azure ML Flask server"""
    print("\n" + "="*60)
    print("Starting Azure ML Server...")
    print("="*60)
    
    server_process = subprocess.Popen(
        [sys.executable, 'azure_ml_server.py'],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True
    )
    
    # Wait for server to start
    time.sleep(3)
    
    if server_process.poll() is None:
        print("✅ Server started on http://127.0.0.1:5001")
        return server_process
    else:
        print("❌ Failed to start server")
        return None


def start_client():
    """Start webcam client"""
    print("\n" + "="*60)
    print("Starting Webcam Client...")
    print("="*60)
    print("Controls:")
    print("  - ESC or 'q' to exit")
    print("  - Show your hand gestures to the webcam")
    print("="*60 + "\n")
    
    client_process = subprocess.Popen(
        [sys.executable, 'testing1.py'],
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True
    )
    
    return client_process


def main():
    print("\n" + "="*60)
    print("Hand Gesture Recognition - Quick Start")
    print("="*60)
    
    # Check dependencies
    if not check_dependencies():
        return
    
    # Check model
    if not check_model():
        return
    
    # Start server
    server = start_server()
    if server is None:
        return
    
    try:
        # Start client
        client = start_client()
        
        # Wait for client to finish
        client.wait()
        
    except KeyboardInterrupt:
        print("\n\nShutting down...")
    
    finally:
        # Cleanup
        if server:
            print("Stopping server...")
            server.terminate()
            server.wait()
        
        print("✅ All processes stopped")


if __name__ == '__main__':
    main()
