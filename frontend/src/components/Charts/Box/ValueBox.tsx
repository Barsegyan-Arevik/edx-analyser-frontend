import * as React from 'react';
import {Box} from '@mui/system';

export type CustomBoxProps = {
    value: number;
    valueAdditionalText: string;
    label: string;
}

export default function ValueBox(props: CustomBoxProps) {
    return (
        <Box
            sx={{
                bgcolor: '#fff',
                borderColor: '#F5F5F5',
                color: '#405479',
                borderRadius: 1,
                textAlign: 'left',
                fontWeight: 'normal',
                width: '16rem',
                height: '5rem',
                paddingLeft: '1.5rem',
                paddingTop: '0.8rem',
                paddingBottom: '0.8rem'
            }}
        >
            <Box
                sx={{
                    fontSize: 20,
                    fontWeight: 'normal',
                }}
            >
                {props.label}
            </Box>
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
                        fontSize: 20,
                    }}
                >
                    {props.valueAdditionalText}
                </Box>
            </Box>
        </Box>
    );
}
