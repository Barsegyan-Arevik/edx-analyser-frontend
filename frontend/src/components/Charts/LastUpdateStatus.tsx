import * as React from 'react'
import { FaArrowRotateLeft } from 'react-icons/fa6'
import { IconButton } from '@mui/material'

type UpdateStatusProps = {
    lastTimeUpdated: Date;
    onUpdateClick: () => void
}


export default function LastUpdateStatus(props: UpdateStatusProps) {
    return (
        <div>
            <span> Последнее обновление: {props.lastTimeUpdated.toLocaleString()} </span>
            <IconButton style={{ width: '30px', height: '30px' }} onClick={props.onUpdateClick}>
                <FaArrowRotateLeft color={'#5471E7'} />
            </IconButton>
        </div>
    )
}
