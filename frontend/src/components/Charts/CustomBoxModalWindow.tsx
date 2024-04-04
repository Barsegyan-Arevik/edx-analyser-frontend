import * as React from 'react';
import {Box} from '@mui/system';

export type CustomBoxModalWindowProps = {
    measure: string;
    value: number;
}

export default function CustomBoxModalWindow({measure, value}: CustomBoxModalWindowProps) {
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
                    fontSize: 32,
                    // fontWeight: 'bold'
                }}
            >
                {value}

            </Box>
            <Box
                sx={{
                    textAlign: 'left',
                    fontSize: 20,
                    fontWeight: 'normal',
                }}
            >
                {measure}
            </Box>
        </Box>
    );
}
