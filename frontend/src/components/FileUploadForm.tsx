import * as React from 'react';
import {useState} from 'react';
import axios from 'axios';
import {BASE_URL} from '../config';
import {Button, Grid, Typography} from '@mui/material'

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
        <Grid container spacing={2} alignItems="center">
            <Grid item>
                <input
                    accept=".zip"
                    style={{display: 'none'}}
                    id="file-upload"
                    type="file"
                    onChange={handleFileChange}
                />
                <label htmlFor="file-upload">
                    <Button
                        variant="outlined"
                        component="span"
                    >
                        Выберите архив
                    </Button>
                </label>
            </Grid>
            <Grid item>
                {selectedFile && <Typography>{selectedFile.name}</Typography>}
            </Grid>
            <Grid item>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleUpload}
                    disabled={!selectedFile}
                >
                    Загрузка
                </Button>
            </Grid>
        </Grid>
    );
};

export default FileUploadForm;
