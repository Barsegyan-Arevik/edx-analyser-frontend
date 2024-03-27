import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import { Box, Modal, Button } from '@mui/material';
import { SlMagnifier } from "react-icons/sl";
import './TableHeatMap.css';
import CustomBoxModalWindow from '../CustomBoxModalWindow';

interface RowData {
    id: number;
    user: string;
    timeSec: number;
}

function lerp(a: number, b: number, t: number) {
    return a + (b - a) * t;
}

function getColorScale(timeRange: number, value: number) {
    const ratio = value / timeRange; // Max population value
    const brightestColor = [2, 206, 169]; // R, G, B values of bright green
    const paleColor = [240, 240, 240]; // R, G, B values of pale green
    const color = brightestColor.map((channel, index) =>
        Math.round(lerp(paleColor[index], channel, ratio))
    );
    return `rgb(${color.join(',')})`;
}

export type TableHeatMapProps = {
    rows: RowData[];
    boxTitle: string;
    columnName: string;
    columnCount: string;
    labelText: string;
}

export default function TableHeatMapRealData({ rows, boxTitle, columnName, columnCount, labelText }: TableHeatMapProps) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        setPage(0); // Переход на первую страницу при изменении поискового запроса
    }, [searchTerm]);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const filteredRows = rows.filter(row =>
        row.user.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    // Calculate statistics
    const timeSecArray = filteredRows.map(row => row.timeSec);
    const minTime = Math.min(...timeSecArray);
    const maxTime = Math.max(...timeSecArray);
    const timeRange = maxTime - minTime;
    const meanTime = Math.round(timeSecArray.reduce((acc, val) => acc + val, 0) / timeSecArray.length);
    const medianTime =
        timeSecArray.length % 2 === 0
            ? Math.round((timeSecArray[timeSecArray.length / 2 - 1] + timeSecArray[timeSecArray.length / 2]) / 2)
            : Math.round(timeSecArray[(timeSecArray.length - 1) / 2]);

    return (
        <Paper sx={{ overflow: 'hidden', padding: '10px', width: '600px' }}>
            <Box
                sx={{
                    fontSize: 16,
                    p: 1,
                    color: '#405479',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    {boxTitle}
                    <Button onClick={handleModalOpen}>
                        <SlMagnifier />
                    </Button>
                </Box>
            </Box>
            <TextField
                size="small"
                label={labelText}
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                fullWidth
                sx={{
                    marginBottom: '10px',
                    '&:hover': {
                        borderColor: 'blue', // Цвет границы при наведении курсора
                    },
                }} // Добавлено смещение для выравнивания с кнопкой модального окна
            />
            <Modal
                open={modalOpen}
                onClose={handleModalClose}
                aria-labelledby="search-modal"
                aria-describedby="search-modal-description"
            >
                <div className={'modal-window-content'}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            bgcolor: '#F0F3FB',
                            boxShadow: 24,
                            p: 2,
                            borderRadius: 2,
                            // display: 'flex',
                            justifyContent: 'space-between'
                            // height: '80%',
                            // overflowY: 'auto'
                        }}
                    >
                        <Box
                            sx={{
                                fontSize: 20,
                                p: 1,
                                color: '#405479',
                                alignItems: 'center',
                                fontWeight: 'normal'
                            }}
                        >
                            {boxTitle}
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                            }}
                        >
                        <Box
                            sx={{
                                bgcolor: '#fff',
                                borderRadius: 2,
                                p: 2
                            }}
                        >
                            <TextField
                                size="small"
                                label={labelText}
                                variant="outlined"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                // fullWidth
                                sx={{ marginBottom: '16px', width: 800 }}
                            />
                            <div style={{ backgroundColor: '#fff', overflowY: 'auto' }}>
                                <TableContainer sx={{ height: 440, width: 800 }}>
                                    <Table stickyHeader size="small" aria-label="sticky table">

                                        <TableHead>
                                            <TableRow>
                                                <TableCell>ID</TableCell>
                                                <TableCell>{columnName}</TableCell>
                                                <TableCell>{columnCount}</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            {filteredRows.map((row, index) => (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                                    <TableCell component="th">
                                                        {row.id}
                                                    </TableCell>
                                                    <TableCell>
                                                        {row.user}
                                                    </TableCell>
                                                    <TableCell
                                                        style={{
                                                            backgroundColor: row.timeSec ? getColorScale(timeRange, row.timeSec) : 'white',
                                                            padding: '8px'
                                                        }}
                                                    >
                                                        {row.timeSec}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </Box>
                        {/* </Box> */}
                        <Box
                            sx={{
                                // p: 2,
                                borderRadius: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                marginLeft: '20px',
                                justifyContent: 'space-between'
                            }}
                        >
                            <div className={'one-box'}>
                                <CustomBoxModalWindow measure={'Минимум'} value={minTime} />
                            </div>

                            <div className={'one-box'}>
                                <CustomBoxModalWindow measure={'Maксимум'} value={maxTime} />
                            </div>

                            <div className={'one-box'}>
                                <CustomBoxModalWindow measure={'Среднее значение'} value={meanTime} />
                            </div>

                            <div className={'one-box'}>
                                <CustomBoxModalWindow measure={'Медиана'} value={medianTime} />
                            </div>
                        </Box>
                        </Box>
                    </Box>
                </div>
            </Modal>
            <TableContainer sx={{ height: 400 }}>
                <Table stickyHeader size="small" aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>{columnName}</TableCell>
                            <TableCell>{columnCount}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        {filteredRows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                    <TableCell component="th">
                                        {row.id}
                                    </TableCell>
                                    <TableCell>
                                        {row.user}
                                    </TableCell>
                                    <TableCell
                                        style={{
                                            backgroundColor: row.timeSec ? getColorScale(timeRange, row.timeSec) : 'white',
                                            padding: '8px'
                                        }}
                                    >
                                        {row.timeSec}
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={filteredRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
