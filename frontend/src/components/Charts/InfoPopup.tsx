import * as React from 'react'
import { Tooltip } from '@mui/material'

type InfoPopupProps = {
    open: boolean;
    handleClose: () => void;
    info: string;
}

export default function InfoPopup(
    props: InfoPopupProps
) {
    return (
        <Tooltip title={''}>
            <span>{props.info}</span>
        </Tooltip>
    )
}