import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        text: {
            primary: '#667B98',
            secondary: '#667B98',
        }
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: 14,
        h1: {
            fontSize: '2.5rem',
            fontWeight: 400,
            lineHeight: 1.2
        }
    }
})

export default theme
