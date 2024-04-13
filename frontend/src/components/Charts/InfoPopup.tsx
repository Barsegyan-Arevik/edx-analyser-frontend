import * as React from 'react'
import { Box, Modal } from '@mui/material'

type InfoPopupProps = {
    open: boolean;
    handleClose: () => void;
    info: string;
}

export default function InfoPopup(
    props: InfoPopupProps
) {
    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            closeAfterTransition
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4
            }}>
                <p>{props.info}</p>
            </Box>
        </Modal>
    )
}