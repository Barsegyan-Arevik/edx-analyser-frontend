import * as React from 'react'
import {ListItem, Skeleton} from '@mui/material'

export const CourseSkeleton = () => {
    return (
        <ListItem>
            <Skeleton variant="rounded" width='80em' height={60}/>
        </ListItem>
    );
};