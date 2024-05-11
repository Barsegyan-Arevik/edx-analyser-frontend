import {Button, Grid, Paper, TextField, Typography} from '@mui/material'
import * as React from 'react'
import {useState} from 'react'
import {BASE_URL} from '../config'
import {axiosApiInstance} from '../interceptors'


function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axiosApiInstance.post(`${BASE_URL}profile/auth`, {username, password});
            const accessToken = response.data.access
            const refreshToken = response.data.refresh
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            window.location.href = '/'
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <Grid container justifyContent="center" alignItems="center" style={{minHeight: '100vh'}}>
            <Grid item xs={12} md={6}>
                <Paper elevation={3} style={{padding: '16px'}}>
                    <Typography variant="h6" gutterBottom>
                        Вход в систему
                    </Typography>
                    <TextField
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        type="password"
                        label="Пароль"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <Grid container justifyContent="flex-end">
                        <Button variant="contained" color="primary" onClick={handleLogin}>
                            Войти
                        </Button>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default function LoginPage() {
    return (
        <LoginForm/>
    )
}
