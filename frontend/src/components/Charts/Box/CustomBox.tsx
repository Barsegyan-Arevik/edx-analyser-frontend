import * as React from 'react';
import {Box} from '@mui/system';

export type CustomBoxProps = {
    value: string;
    value_additional_text: string;
    label: string;
}

export default function CustomBox(props: CustomBoxProps) {
    return (
        <Box
            sx={{
                bgcolor: '#fff',
                borderColor: '#F5F5F5',
                color: '#405479',
                p: 2,
                borderRadius: 1,
                textAlign: 'left',
                fontWeight: 'normal',
            }}
        >
            <Box
                sx={{
                    textAlign: 'left',
                    color: '#5471E7',
                    fontSize: 48,
                    fontWeight: 'medium'
                }}
            >
                {props.value}

                <Box
                    sx={{
                        color: '#5471E7',
                        display: 'inline',
                        fontWeight: 'normal',
                        mx: 0.5,
                        fontSize: 20,
                    }}
                >
                    {props.value_additional_text}
                </Box>
            </Box>
            <Box
                sx={{
                    textAlign: 'left',
                    fontSize: 20,
                    fontWeight: 'normal',
                }}
            >
                {props.label}
            </Box>
        </Box>
    );
}
