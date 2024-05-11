import * as React from 'react';
import {Box} from '@mui/material';

export type AggregateMeasureBoxProps = {
    measure: string;
    value: number;
}

export default function AggregateMeasureBox(props: AggregateMeasureBoxProps) {
    return (
        <Box
            sx={{
                bgcolor: '#fff',
                borderColor: '#F5F5F5',
                color: '#405479',
                p: 2,
                borderRadius: 2,
                textAlign: 'left',
                fontWeight: 'medium',
                height: 84
            }}
        >
            <Box
                sx={{
                    textAlign: 'left',
                    fontSize: 32
                }}
            >
                {props.value}
            </Box>
            <Box
                sx={{
                    textAlign: 'left',
                    fontSize: 20,
                    fontWeight: 'normal'
                }}
            >
                {props.measure}
            </Box>
        </Box>
    );
}
