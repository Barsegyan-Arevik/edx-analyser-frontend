import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import * as React from 'react'
import theme from './theme'
import {ThemeProvider} from '@mui/material'
import {QueryClient, QueryClientProvider} from 'react-query'

const root = ReactDOM.createRoot(document.getElementById('root'))
const queryClient = new QueryClient()
root.render(
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </QueryClientProvider>
)
