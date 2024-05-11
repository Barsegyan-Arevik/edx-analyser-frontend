import * as React from 'react'
import {useNavigate} from 'react-router-dom'
import {Button, Container, Typography} from '@mui/material'
// import notF from './notFoundImage.jpg'
import {createTheme, ThemeProvider} from '@mui/material/styles';

//
// // Augment the palette to include a violet color
// declare module '@mui/material/styles' {
//     interface Palette {
//         violet: Palette['primary'];
//     }
//
//     interface PaletteOptions {
//         violet?: PaletteOptions['primary'];
//     }
// }
//
// // Update the Button's color options to include a violet option
// declare module '@mui/material/Button' {
//     interface ButtonPropsColorOverrides {
//         violet: true;
//     }
// }
//
// const violetBase = '#5A3AFD';
// const violetAnother = '#81B1FF';
//
// const theme = createTheme({
//     palette: {
//         violet: {
//             main: violetAnother,
//         },
//     },
// });


export default function NotFoundPage() {
    const navigate = useNavigate()
    return (
            <Container maxWidth="sm" sx={{textAlign: 'center', mt: '10vh'}}>
                <Typography variant="h4" color={'#405479'} gutterBottom>
                    404 Страница не найдена
                </Typography>
                <img src={require('../images/notFoundImage.jpg')}/>
                <Typography variant="body1" color={'#405479'} paragraph>
                    Извините, запрашиваемая страница не существует.
                    Пожалуйста, убедитесь, что URL правильный, или вернитесь на главную страницу для продолжения
                    просмотра сайта.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate('/')}
                >
                    <Typography color={'#fff'}>
                    На главную
                </Typography>
                </Button>
            </Container>
    )
}
