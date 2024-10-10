# Face Recognition Directory

## Overview

The **Face Recognition Directory** is a tool designed to recognize and store unique face embeddings from uploaded images and videos. The project consists of two components: a Python backend that handles the face recognition processing and a React frontend that provides an interface for file uploads.

### Features
- Asynchronously processes images and videos to recognize faces.
- Stores media file details and unique face embeddings in a SQLite database.
- Checks for duplicate face embeddings using cosine similarity.
- Provides a user-friendly interface for uploading files.

---
## Frontend (React)

### Description
The frontend is built with React and provides a simple interface for users to upload images and videos. It communicates with the Flask backend to handle file uploads and display results.

### How It Works
- **File Upload Interface:** Users can select multiple files to upload.
- **API Communication:** Files are sent to the backend for processing.
- **Status Updates:** Users receive feedback on the upload status and processing results.

### Setup Instructions

1. **Navigate to the Frontend Directory:**
   ```bash
   cd face_recognition_directory_frontend

2. **Install Dependencies:**
    ```bash
    npm install

3. **Run the Frontend:**
    ```bash
    npm start

4. **Environment Configuration**
- Ensure that the backend is running on http://127.0.0.1:5000 or update the API endpoint in the frontend code if needed.

### Usage
- Start the backend server by running python app.py.
- In a separate terminal, navigate to the frontend directory and run npm start.
- Open your browser and go to http://localhost:3000.
- Use the upload interface to select images or videos for processing.

### Note
- Uploaded images and videos are processed asynchronously, meaning you can upload more files while previous ones are being processed.
- Check the database for processed files and face embeddings if needed.