import * as React from 'react'
import {FaArrowRotateLeft} from 'react-icons/fa6'
import {IconButton, Typography} from '@mui/material'

type UpdateStatusProps = {
    lastTimeUpdated: Date;
    onUpdateClick: () => void
}

export default function LastUpdateStatus(props: UpdateStatusProps) {
    return (
        <div>
            <Typography color={'#405479'} display="inline" variant="body2"> Последнее
                обновление: {props.lastTimeUpdated.toLocaleString()} </Typography>
            <IconButton style={{width: '30px', height: '30px'}} onClick={props.onUpdateClick}>
                <FaArrowRotateLeft color={'#5471E7'}/>
            </IconButton>
        </div>
    )
}
