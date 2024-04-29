import * as React from 'react';
import {useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid} from '@mui/material';
import FileUploadForm from './FileUploadForm';
import TextField from '@mui/material/TextField';
import {BASE_URL} from '../../config';
import axios from 'axios';

type CreateCourseFormProps = {
    open: boolean;
    onClose: () => void;
};

export default function CreateCourseForm(props: CreateCourseFormProps) {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('archive', selectedFile);

        axios
            .post(`${BASE_URL}upload/`, formData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error uploading file:', error);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleUpload();
        props.onClose();
    };

    return (
        <Dialog open={props.open} onClose={props.onClose}>
            <DialogTitle>Добавить курс</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField name="courseName" label="Название курса" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                            <FileUploadForm selectedFile={selectedFile} onFileChange={setSelectedFile} />
                        </Grid>
                    </Grid>
                    <DialogActions>
                        <Button onClick={props.onClose}>Отменить</Button>
                        <Button type="submit" variant="contained" color="primary">
                            Добавить курс
                        </Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
}
