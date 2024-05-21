import * as React from 'react';
import { Grid, Skeleton } from '@mui/material';

export default function LoadingSectionSkeleton() {
    return (
        <Grid container spacing={2} sx={{ paddingX: '4em' }}>
            <Grid item xs={12} md={6}>
                <Skeleton variant="rounded" width="100%" height={316} animation="wave" />
            </Grid>
            <Grid item xs={12} md={6} container direction="column" spacing={2}>
                <Grid item>
                    <Skeleton variant="rounded" width="100%" height={150} animation="wave"/>
                </Grid>
                <Grid item>
                    <Skeleton variant="rounded" width="100%" height={150} animation="wave"/>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Skeleton variant="rounded" width="100%" height={200} animation="wave"/>
            </Grid>
        </Grid>
    );
}
