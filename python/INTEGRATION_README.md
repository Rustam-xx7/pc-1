# Hand Gesture Recognition with Azure ML Integration

Complete system for real-time hand gesture and sign language recognition using OpenCV, MediaPipe, and Azure ML.

## 🏗️ Architecture

```
┌─────────────────┐         ┌──────────────────┐         ┌─────────────────┐
│   Webcam Client │  HTTP   │  Flask Server    │         │   Azure ML      │
│  (testing1.py)  │ ───────>│ (azure_ml_       │ ───────>│   Model         │
│                 │  POST   │  server.py)      │         │   (trained)     │
│  - OpenCV       │         │                  │         │                 │
│  - MediaPipe    │<────────│  - Receives      │<────────│  - Predicts     │
│  - Hand Track   │Response │    landmarks     │Response │    gestures     │
└─────────────────┘         │  - ML inference  │         │                 │
                            └──────────────────┘         └─────────────────┘
```

## 📋 Workflow

### **Step 1: Webcam Capture & Hand Detection**
- OpenCV captures video frames from webcam
- MediaPipe Hands detects up to **2 hands simultaneously**
- Extracts **21 landmarks per hand** (x, y, z coordinates = 63 features per hand)
- Identifies handedness (Left/Right)

### **Step 2: Data Transmission to Azure ML**
- Flask client (`testing1.py`) sends JSON with:
  ```json
  {
    "hands": [
      {
        "landmarks": [x1, y1, z1, x2, y2, z2, ...],
        "handedness": "Left"
      },
      {
        "landmarks": [...],
        "handedness": "Right"
      }
    ],
    "timestamp": 1234567890.123
  }
  ```

### **Step 3: Azure ML Processing**
- Flask server (`azure_ml_server.py`) receives landmark data
- Normalizes landmarks using pre-trained scaler
- Feeds to ML model (Random Forest/SVM)
- Returns prediction with confidence score

### **Step 4: Response Display**
- Client receives JSON response:
  ```json
  {
    "gesture": "thumbs_up",
    "confidence": 0.95,
    "handedness": "Right",
    "hands_count": 1
  }
  ```
- Displays result overlay on video feed
- Shows FPS, confidence, and detected hands

## 🚀 Setup Instructions

### 1. Install Dependencies
```bash
pip install opencv-python mediapipe flask flask-cors requests numpy joblib scikit-learn pillow
```

### 2. Train ML Model (if not already trained)
```bash
# Collect gesture data
python collect_data.py

# Train the model
python train_model.py
```

### 3. Start Azure ML Server
```bash
python azure_ml_server.py
```
Server will start on `http://127.0.0.1:5001`

### 4. Run Webcam Client
```bash
python testing1.py
```

## 🎮 Controls

- **ESC** or **'q'** - Exit application
- Webcam shows:
  - ✅ Hand landmarks (both hands)
  - ✅ Handedness labels (Left/Right)
  - ✅ Gesture prediction
  - ✅ Confidence score
  - ✅ FPS counter

## 📁 Files Description

| File | Purpose |
|------|---------|
| `testing1.py` | Webcam client with MediaPipe tracking |
| `azure_ml_server.py` | Flask server for ML inference |
| `train_model.py` | Train gesture recognition model |
| `collect_data.py` | Collect training data |
| `hand_dataset/` | Stored model and training data |

## 🔧 Configuration

### Change Azure ML Endpoint
In [testing1.py](d:\CODING\pc-1\python\testing1.py#L13):
```python
AZURE_ML_ENDPOINT = "http://your-azure-endpoint.com/predict"
```

### Adjust Detection Confidence
In [testing1.py](d:\CODING\pc-1\python\testing1.py#L23-L24):
```python
min_detection_confidence=0.7,  # Lower = more sensitive
min_tracking_confidence=0.7    # Lower = smoother tracking
```

## 🎯 Features

✅ **Both Hands Tracking** - Simultaneous left and right hand detection  
✅ **Real-time Processing** - Low-latency predictions (~30 FPS)  
✅ **Sign Language Support** - Two-hand gesture recognition  
✅ **Confidence Scores** - ML certainty for each prediction  
✅ **Handedness Detection** - Distinguishes left vs right hand  
✅ **Azure ML Integration** - Scalable cloud ML inference  
✅ **Visual Feedback** - Clear UI with overlays and labels  

## 🐛 Troubleshooting

### Connection Error
- Ensure `azure_ml_server.py` is running on port 5001
- Check firewall settings

### Model Not Found
- Run `python train_model.py` first
- Verify `hand_dataset/` folder exists

### Low FPS
- Reduce resolution in [testing1.py](d:\CODING\pc-1\python\testing1.py#L16-L17)
- Increase request timeout in [testing1.py](d:\CODING\pc-1\python\testing1.py#L71)

### Inaccurate Predictions
- Collect more training data
- Retrain model with higher accuracy
- Adjust confidence thresholds

## 📊 API Endpoints

### POST /predict
Send hand landmarks for gesture prediction
```python
{
  "hands": [{"landmarks": [...], "handedness": "Left"}]
}
```

### GET /health
Check server status and available gestures

### GET /model/info
View model accuracy and metadata

### GET /gestures
List all supported gestures

## 🔮 Next Steps

1. Deploy to actual Azure ML endpoint
2. Add more gesture classes
3. Implement gesture recording
4. Add sound/voice feedback
5. Create mobile app version

---
**Created**: December 2025  
**Tech Stack**: Python, OpenCV, MediaPipe, Flask, scikit-learn
