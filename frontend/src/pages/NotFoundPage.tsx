import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Typography } from '@mui/material'

export default function NotFoundPage() {
    const navigate = useNavigate()

    return (
        <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="h4" color={'#405479'} gutterBottom>
                404 Страница не найдена
            </Typography>
            <Typography variant="body1" color={'#405479'} paragraph>
                Извините, запрашиваемая страница не существует.
                Пожалуйста, убедитесь, что URL правильный, или вернитесь на главную страницу для продолжения просмотра сайта.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/')}
            >
                 На главную
            </Button>
        </Container>
    )
}
