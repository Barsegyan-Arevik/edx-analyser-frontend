import * as React from 'react';
import './SectionHeader.css';
import {Grid, Box} from '@mui/material'

export type HeaderProps = {
    text: string;
    style?: React.CSSProperties;
}

export default function SectionHeader(props: HeaderProps) {
    return (
        <Box style={{fontSize: '2.5em', paddingTop: '40px', paddingLeft: '50px', paddingBottom: '20px', color: '#405479'}}>
            <Grid>
                {props.text}
            </Grid>
        </Box>
    );
}
