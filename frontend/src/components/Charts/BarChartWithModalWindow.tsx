import * as React from 'react';
import { useState } from 'react';
import { Box, Modal, Button } from '@mui/material'; // Предполагается, что вы используете Material-UI
import {BarChart} from "@mui/x-charts/BarChart";

const ChartModal = ({ onClose }) => (
  <Modal
    open={true} // Может быть состоянием, которое вы управляете для открытия и закрытия модального окна
    onClose={onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 800, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
      {/* Вставьте ваш компонент графика здесь */}
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
        width={800}
        height={300}
      />
    </Box>
  </Modal>
);

export default function BarChartWithModalWindow() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Box sx={{ width: '10%', overflowX: 'auto' }}>
        {/* Здесь ваш график */}
        <BarChart
          xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
          series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
          width={800}
          height={300}
        />
      </Box>
      {/* Кнопка с лупой */}
      <Button variant="outlined" onClick={openModal}>Открыть график в модальном окне</Button>
      {/* Модальное окно */}
      {isModalOpen && <ChartModal onClose={closeModal} />}
    </>
  );
};
