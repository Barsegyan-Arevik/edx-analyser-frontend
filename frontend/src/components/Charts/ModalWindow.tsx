import * as React from 'react'
import { Modal, Paper } from '@mui/material'

type ModalWindowProps = {
    open: boolean;
    handleClose: () => void;
    children: React.JSX.Element;
}

export default function ModalWindow(props: ModalWindowProps) {

    return (
        <Paper sx={{ overflow: 'hidden' }}>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                //   className={classes.modal}
                open={props.open}
                onClose={props.handleClose}
                closeAfterTransition
            >
                <div>
                    {props.children}
                </div>
            </Modal>
        </Paper>
    )
}
