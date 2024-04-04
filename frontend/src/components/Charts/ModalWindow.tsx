import React from 'react';
import {Modal, Paper} from '@mui/material';


export default function ModalWindow({open, handleClose, children}) {

    return (
        <Paper sx={{overflow: 'hidden'}}>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                //   className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <div>
                    {children}
                </div>
            </Modal>
        </Paper>
    );
};
