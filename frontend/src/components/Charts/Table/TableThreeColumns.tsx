import * as React from 'react';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import './TableHeatMap.css';
import { getGreenColorScale } from '../../../utils/utils';

export interface RowData {
    value: string;
    count: number;
    uniqueViews: number;
}

interface Chart {
    items: RowData[];
}

export type TableThreeColumnsProps = {
    rows: Chart;
    columnName: string;
    columnCount: string;
    columnUniqueViews: string;
    labelText: string;
}

export default function TableThreeColumns(props: TableThreeColumnsProps) {
    const { rows, columnName, columnCount, columnUniqueViews } = props;

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');

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

    const filteredRows = rows.items.filter(row =>
        row.value.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const timeSecArray = rows.items.map(row => row.count);
    const minTime = Math.min(...timeSecArray);
    const maxTime = Math.max(...timeSecArray);
    const timeRange = maxTime - minTime;

    const uniqueViewsArray = rows.items.map(row => row.uniqueViews);
    const minUniqueViews = Math.min(...uniqueViewsArray);
    const maxUniqueViews = Math.max(...uniqueViewsArray);
    const uniqueViewsRange = maxUniqueViews - minUniqueViews;

    return (
        <div style={{ overflow: 'hidden', padding: '10px' }}>
            <TextField
                size="small"
                label={props.labelText}
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                fullWidth
                sx={{
                    marginBottom: '10px',
                    '&:hover': {
                        borderColor: 'blue', // Цвет границы при наведении курсора
                    },
                }}
            />
            <TableContainer sx={{ height: 400 }}>
                <Table stickyHeader size="small" aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>{columnName}</TableCell>
                            <TableCell>{columnCount}</TableCell>
                            <TableCell>{columnUniqueViews}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        {filteredRows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                    <TableCell>
                                        {row.value.length > 50 ? (
                                            <Tooltip title={row.value} placement="top">
                                                <span>{row.value.slice(0, 50)}...</span>
                                            </Tooltip>
                                        ) : (
                                            row.value
                                        )}
                                    </TableCell>
                                    <TableCell
                                        style={{
                                            backgroundColor: row.count ? getGreenColorScale(timeRange, minTime, row.count) : 'white',
                                            padding: '8px'
                                        }}
                                    >
                                        {row.count}
                                    </TableCell>
                                    <TableCell
                                        style={{
                                            backgroundColor: row.uniqueViews ? getGreenColorScale(uniqueViewsRange, minUniqueViews, row.uniqueViews) : 'white',
                                            padding: '8px'
                                        }}
                                    >
                                        {row.uniqueViews}
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
        </div>
    );
}
