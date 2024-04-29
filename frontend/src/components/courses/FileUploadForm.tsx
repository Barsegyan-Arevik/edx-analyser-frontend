import * as React from 'react';

import {Button, Grid, Typography} from '@mui/material'

type FileUploadFormProps = {
    selectedFile: any;
    onFileChange: (value: any) => void
}

const FileUploadForm = (props: FileUploadFormProps) => {
    const handleFileChange = (event) => {
        props.onFileChange(event.target.files[0]);
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
                {props.selectedFile && <Typography>{props.selectedFile.name}</Typography>}
            </Grid>
        </Grid>
    );
};

export default FileUploadForm;
