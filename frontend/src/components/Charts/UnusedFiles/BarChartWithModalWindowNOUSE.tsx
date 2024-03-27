// BarChartWithModalWindow.tsx
import * as React from 'react';
import {useState} from 'react';
import {Box, Modal, Button} from '@mui/material';
import {BarChart} from "@mui/x-charts/BarChart";
import {SlMagnifier} from "react-icons/sl";

// Определение типа пропсов компонента
export type BarChartProps = {
    data: number[];
    labels: string[];
}

const ChartModal = ({data, labels, onClose}: BarChartProps & { onClose: () => void }) => (
    <Modal
        open={true}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 800,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4
        }}>
            <BarChart
                xAxis={[{scaleType: 'band', data: labels}]}
                series={[{data}]}
                width={800}
                height={300}
            />
        </Box>
    </Modal>
);

const BarChartWithModalWindow = ({data, labels}: BarChartProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>

            <Button onClick={openModal}>
                <SlMagnifier/>
            </Button>
            {isModalOpen && <ChartModal data={data} labels={labels} onClose={closeModal}/>}
            <Box sx={{width: '95%', overflowX: 'auto', backgroundColor: '#fff', p: 1}}>
                <BarChart
                    xAxis={[{scaleType: 'band', data: labels}]}
                    series={[{data}]}
                    width={4000}
                    height={400}
                />
            </Box>

        </>
    );
};

export default BarChartWithModalWindow;
