import * as React from 'react'
import { useState } from 'react';
import axios from 'axios';
import {BASE_URL} from '../config'

const FileUploadForm = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('file', selectedFile);

        axios.post(`${BASE_URL}upload/`, formData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error uploading file:', error);
            });
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default FileUploadForm;
