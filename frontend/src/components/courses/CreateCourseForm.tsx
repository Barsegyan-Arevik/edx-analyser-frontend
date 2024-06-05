import * as React from 'react';
import {useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Grid, Switch} from '@mui/material';
import FileUploadForm from './FileUploadForm';
import TextField from '@mui/material/TextField';
import {BASE_URL} from '../../config';
import {axiosApiInstance} from '../../interceptors'

type CreateCourseFormProps = {
    open: boolean;
    onClose: () => void;
};

export default function CreateCourseForm(props: CreateCourseFormProps) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isPublic, setIsPublic] = useState(false);
    const [name, setName] = useState('')

    const handleUpload = () => {
        const data = new FormData();
        data.append('archive', selectedFile)
        data.append('courseName', name)
        data.append('isPublic', JSON.stringify(isPublic))

        axiosApiInstance
            .post(`${BASE_URL}courses/upload/`, data)
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
                    <Grid container spacing={2} paddingTop={2}>
                        <Grid item xs={12}>
                            <TextField name="courseName" label="Название курса" fullWidth onChange={e => setName(e.target.value)} required/>
                        </Grid>
                        <Grid item xs={7}>
                            <FileUploadForm selectedFile={selectedFile} onFileChange={setSelectedFile}/>
                        </Grid>
                        <Grid container xs={5} justifyContent="flex-end">
                            <FormControlLabel
                                label="Доступен всем"
                                labelPlacement={'end'}
                                control={<Switch checked={isPublic} onChange={() => setIsPublic(!isPublic)}/>}
                            />
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
