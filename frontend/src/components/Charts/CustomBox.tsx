import * as React from 'react';
import {Box, ThemeProvider, createTheme} from '@mui/system';

export type CustomBoxProps = {
    value: string;
    label: string;
}

export default function CustomBox(props: CustomBoxProps) {
    return (
        // <ThemeProvider theme={theme}>
        <Box
            sx={{
                // boxShadow: '0 4px 6px rgba(50, 50, 93, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
                minWidth: 200,
                height: 121,
                bgcolor: '#fff',
                borderColor: '#F5F5F5',
                color: '#405479',
                p: 2,
                borderRadius: 1,
                textAlign: 'center',
                fontSize: 15,
                fontWeight: 'normal',
            }}
        >
            {props.label}
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    borderRadius: 2,
                    p: 2,
                    minWidth: 350,
                }}
            >
                <Box sx={{color: '#02CEA9', fontSize: 34, fontWeight: 'medium'}}>
                    {props.value}
                </Box>

            </Box>
            {/*</ThemeProvider>*/}
        </Box>
    );
}