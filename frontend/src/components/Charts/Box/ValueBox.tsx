import * as React from 'react'
import { Box, Grid, Paper } from '@mui/material'

export type CustomBoxProps = {
    value: number;
    valueAdditionalText: string;
    label: string;
}

export default function ValueBox(props: CustomBoxProps) {
    return (
        <Paper
            sx={{
                bgcolor: '#fff',
                borderColor: '#F5F5F5',
                color: '#405479',
                borderRadius: 1,
                textAlign: 'left',
                fontWeight: 'normal',
                padding: '0.55rem 1.5rem'
            }}
        >
            <Grid container alignItems="center" spacing={1}>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            fontSize: '2em',
                            fontWeight: 'normal'
                        }}
                    >
                        {props.label}
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            color: '#405479',
                            fontSize: 36,
                            fontWeight: 'medium'
                        }}
                    >
                        {props.value}
                        <Box
                            sx={{
                                color: '#405479',
                                display: 'inline',
                                fontWeight: 'normal',
                                mx: 0.5,
                                fontSize: 20
                            }}
                        >
                            {props.valueAdditionalText}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
}
