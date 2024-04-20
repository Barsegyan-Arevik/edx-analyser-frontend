import * as React from 'react';
import {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import {Grid} from '@mui/material';
import './TableHeatMap.css';
import {ChartSize, getGreenColorScale} from '../../../utils/utils';

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
    size: ChartSize;
}

export default function TableThreeColumns(props: TableThreeColumnsProps) {
    const {rows, columnName, columnCount, columnUniqueViews} = props;

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortColumn, setSortColumn] = useState('');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

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

    const handleSort = (column: string) => {
        if (sortColumn === column) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortDirection('asc');
        }
    };

    const sortedRows = rows.items.sort((a, b) => {
        const aValue = a[sortColumn];
        const bValue = b[sortColumn];
        if (sortDirection === 'asc') {
            return aValue > bValue ? 1 : -1;
        } else {
            return aValue < bValue ? 1 : -1;
        }
    });

    const filteredRows = sortedRows.filter(row =>
        row.value.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const timeSecArray = sortedRows.map(row => row.count);
    const minTime = Math.min(...timeSecArray);
    const maxTime = Math.max(...timeSecArray);
    const timeRange = maxTime - minTime;

    const uniqueViewsArray = sortedRows.map(row => row.uniqueViews);
    const minUniqueViews = Math.min(...uniqueViewsArray);
    const maxUniqueViews = Math.max(...uniqueViewsArray);
    const uniqueViewsRange = maxUniqueViews - minUniqueViews;

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={11.5}>
                <TextField
                    size="small"
                    label={props.labelText}
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    fullWidth
                    sx={{
                        marginBottom: '5px',
                        marginTop: '5px',
                        '&:hover': {
                            borderColor: 'blue', // Цвет границы при наведении курсора
                        },
                        '& .MuiOutlinedInput-input': {
                            padding: '5px 5px', // Изменение отступов внутри поля ввода
                            height: '25px', // Изменение высоты поля ввода
                        },
                        '& .MuiInputLabel-root': {
                            fontSize: '0.85rem', // Уменьшаем размер метки
                        },
                    }}
                />
            </Grid>
            <Grid item xs={11} style={{height: '55vh'}}>
                <TableContainer sx={{height: '100%'}}>
                    <Table stickyHeader size="small" aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell onClick={() => handleSort('value')} style={{width: '60%'}}>
                                    {columnName} {sortColumn === 'value' && (sortDirection === 'asc' ? '▲' : '▼')}
                                </TableCell>
                                <TableCell onClick={() => handleSort('count')} style={{width: '20%'}}>
                                    {columnCount} {sortColumn === 'count' && (sortDirection === 'asc' ? '▲' : '▼')}
                                </TableCell>
                                <TableCell onClick={() => handleSort('uniqueViews')} style={{width: '20%'}}>
                                    {columnUniqueViews} {sortColumn === 'uniqueViews' && (sortDirection === 'asc' ? '▲' : '▼')}
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                            {filteredRows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        <TableCell style={{width: '60%'}}>
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
                                                padding: '8px',
                                                width: '20%'
                                            }}
                                        >
                                            {row.count}
                                        </TableCell>
                                        <TableCell
                                            style={{
                                                backgroundColor: row.uniqueViews ? getGreenColorScale(uniqueViewsRange, minUniqueViews, row.uniqueViews) : 'white',
                                                padding: '8px',
                                                width: '20%'
                                            }}
                                        >
                                            {row.uniqueViews}
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={11}>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={filteredRows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Grid>
        </Grid>
    );
}
