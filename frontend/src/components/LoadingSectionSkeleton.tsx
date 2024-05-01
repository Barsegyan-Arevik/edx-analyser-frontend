import * as React from 'react';
import { Grid, Skeleton } from '@mui/material';

export default function LoadingSectionSkeleton() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Skeleton variant="rounded" width="100%" height={316} />
            </Grid>
            <Grid item xs={12} md={6} container direction="column" spacing={2}>
                <Grid item>
                    <Skeleton variant="rounded" width="100%" height={150} />
                </Grid>
                <Grid item>
                    <Skeleton variant="rounded" width="100%" height={150} />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Skeleton variant="rounded" width="100%" height={200} />
            </Grid>
        </Grid>
    );
}
