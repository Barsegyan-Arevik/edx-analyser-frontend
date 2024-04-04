import * as React from 'react';
import {useState} from 'react';
import {Box, Button} from '@mui/material';
import {SlMagnifier} from "react-icons/sl";
import Paper from '@mui/material/Paper';
import ModalWindow from '../ModalWindow';
import CustomLineChart from './CustomLineChart';

export type LineChartSize = {
    width: number;
    height: number;
};

const baseSize: LineChartSize = {
    width: 750,
    height: 470
};

const modalSize: LineChartSize = {
    width: 1150,
    height: 400
};

export type LineChartProps = {
    data: string;
}

export type LineChartExtendedProps = {
    data: string;
    lineChartSize: LineChartSize;
}

export default function LineChartWithModalWindow(props: LineChartProps) {

    const lineChartBaseProps: LineChartExtendedProps = {
        data: props.data,
        lineChartSize: baseSize
    };

    const lineChartModalProps: LineChartExtendedProps = {
        data: props.data,
        lineChartSize: modalSize
    };

    const [open, setOpen] = useState(false);

    const handleOpenModal = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    return (
        <Paper sx={{overflow: 'hidden', padding: '10px', bgcolor: '#fff', borderRadius: 1}}>
            <Box
                sx={{
                    bgcolor: '#fff',
                    borderRadius: 1,
                    p: 1,
                    // paper: '#fff',
                    // width: 550,
                    fontSize: 16,
                    paddingLeft: 1,
                    paddingTop: 1,
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: 16,
                        color: '#405479'
                    }}
                >
                    Количество воспроизведений видеоматериалов, распределённая по дням
                    <Button onClick={handleOpenModal}>
                        <SlMagnifier/>
                    </Button>
                </Box>
                <CustomLineChart data={props.data} lineChartSize={baseSize}/>
                <ModalWindow open={open} handleClose={handleCloseModal}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 4,
                            borderRadius: 2
                        }}
                    >
                        <CustomLineChart data={props.data} lineChartSize={modalSize}/>
                    </Box>
                </ModalWindow>
            </Box>
        </Paper>
    );
}
