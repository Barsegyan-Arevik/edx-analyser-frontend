import * as React from 'react'
import { Box, Grid } from '@mui/material'

export type HeaderProps = {
    text: string;
    style?: React.CSSProperties;
}

export default function SectionHeader(props: HeaderProps) {
    return (
        <Box style={{
            fontSize: '2.5em',
            color: '#405479'
        }}>
            <Grid>
                {props.text}
            </Grid>
        </Box>
    )
}
