import * as React from 'react';
import {useEffect, useMemo, useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import {Box} from '@mui/material';
import './TableHeatMap.css';
import CustomBoxModalWindow from '../CustomBoxModalWindow';
import {getGreenColorScale} from "../../../utils";

interface RowData {
    id: number;
    user: string;
    timeSec: number;
}


export type TableHeatMapProps = {
    rows: RowData[];
    boxTitle: string;
    columnName: string;
    columnCount: string;
    labelText: string;
}

export default function TableHeatMapInsideWindow({
                                                     rows,
                                                     boxTitle,
                                                     columnName,
                                                     columnCount,
                                                     labelText
                                                 }: TableHeatMapProps) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        setPage(0); // Переход на первую страницу при изменении поискового запроса
    }, [searchTerm]);


    const filteredRows = useMemo(() => {
        return rows.filter(row =>
            row.user.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [rows, searchTerm]);

    // Calculate statistics
    const timeSecArray = rows.map(row => row.timeSec);
    const minTime = useMemo(() => Math.min(...timeSecArray), [timeSecArray]);
    const maxTime = useMemo(() => Math.max(...timeSecArray), [timeSecArray]);
    const timeRange = useMemo(() => maxTime - minTime, [maxTime, minTime]);
    const meanTime = useMemo(() => Math.round(timeSecArray.reduce((acc, val) => acc + val, 0) / timeSecArray.length), [timeSecArray]);
    const medianTime = useMemo(() => {
        const sortedArray = [...timeSecArray].sort((a, b) => a - b);
        return timeSecArray.length % 2 === 0
            ? Math.round((sortedArray[sortedArray.length / 2 - 1] + sortedArray[sortedArray.length / 2]) / 2)
            : Math.round(sortedArray[(sortedArray.length - 1) / 2]);
    }, [timeSecArray]);

    return (
        <Paper sx={{overflow: 'hidden', padding: '10px', width: '600px'}}>

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
                                sx={{marginBottom: '16px', width: 800}}
                            />
                            <div style={{backgroundColor: '#fff', overflowY: 'auto'}}>
                                <TableContainer sx={{height: 440, width: 800}}>
                                    <Table stickyHeader size="small" aria-label="sticky table">

                                        <TableHead>
                                            <TableRow>
                                                <TableCell>ID</TableCell>
                                                <TableCell>{columnName}</TableCell>
                                                <TableCell>{columnCount}</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody sx={{'&:last-child td, &:last-child th': {border: 0}}}>
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
                                                            backgroundColor: row.timeSec ? getGreenColorScale(timeRange, row.timeSec) : 'white',
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
                                <CustomBoxModalWindow measure={'Минимум'} value={minTime}/>
                            </div>

                            <div className={'one-box'}>
                                <CustomBoxModalWindow measure={'Maксимум'} value={maxTime}/>
                            </div>

                            <div className={'one-box'}>
                                <CustomBoxModalWindow measure={'Среднее значение'} value={meanTime}/>
                            </div>

                            <div className={'one-box'}>
                                <CustomBoxModalWindow measure={'Медиана'} value={medianTime}/>
                            </div>
                        </Box>
                    </Box>
                </Box>
            </div>
        </Paper>
    );
}
