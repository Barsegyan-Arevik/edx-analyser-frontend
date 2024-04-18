import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        text: {
            primary: '#405479',
            // secondary: '#667B98',
            secondary: '#405479',
        }
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: 16,
        h1: {
            fontSize: '2.5rem',
            fontWeight: 400,
            lineHeight: 1.2
        }
    }
})

export default theme
