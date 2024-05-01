import {Skeleton} from '@mui/lab'
import * as React from 'react'
import {ListItem} from '@mui/material'

export const CourseSkeleton = () => {
    return (
        <ListItem>
            <Skeleton variant="rounded" width='60em' height={60}/>
        </ListItem>
    );
};