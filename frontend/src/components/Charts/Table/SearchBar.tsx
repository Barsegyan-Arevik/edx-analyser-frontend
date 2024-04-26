import TextField from '@mui/material/TextField'
import { Grid } from '@mui/material'
import * as React from 'react'

type SearchBarProps = {
    labelText: string;
    searchTerm: string;
    setSearchTerm: (value: React.SetStateAction<string>) => void
}


export default function SearchBar(props: SearchBarProps) {
    return (
        <Grid item xs={11.5}>
            <TextField
                size="small"
                label={props.labelText}
                variant="outlined"
                value={props.searchTerm}
                onChange={(e) => props.setSearchTerm(e.target.value)}
                fullWidth
                sx={{
                    marginBottom: '5px',
                    marginTop: '5px',
                    '&:hover': {
                        borderColor: 'blue'
                    },
                    '& .MuiOutlinedInput-input': {
                        padding: '5px 5px',
                        height: '25px'
                    },
                    '& .MuiInputLabel-root': {
                        fontSize: '0.85rem'
                    }
                }}
            />
        </Grid>
    )
}