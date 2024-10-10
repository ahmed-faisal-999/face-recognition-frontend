import React, { useState } from 'react';
import axios from 'axios';

const BackendURL = "http://127.0.0.1:5000"

function App() {
    const [files, setFiles] = useState(null);

    const handleFileChange = (event) => {
        setFiles(event.target.files);
    };

    const uploadFiles = async () => {
        const formData = new FormData();
        for (let file of files) {
            formData.append('files', file);
        }
        try {
            const response = await axios.post(BackendURL + '/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert(`Files uploaded successfully! Found ${response.data.count} faces.`);
        } catch (error) {
            console.error('Error uploading files:', error);
            alert('Error uploading files.');
        }
    };

    return (
        <div>
            <h1>Face Recognition Directory</h1>
            <input type="file" multiple accept="image/*,video/*" onChange={handleFileChange} />
            <button onClick={uploadFiles}>Upload</button>
        </div>
    );
}

export default App;
