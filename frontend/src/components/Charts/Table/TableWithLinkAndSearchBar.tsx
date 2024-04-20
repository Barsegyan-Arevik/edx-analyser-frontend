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
}

interface Chart {
    items: RowData[];
}

export type TableWithLinkAndSearchBarProps = {
    rows: Chart;
    columnName: string;
    columnCount: string;
    labelText: string;
    size: ChartSize;
}

const TableWithLinkAndSearchBar: React.FC<TableWithLinkAndSearchBarProps> = (props) => {
    const rows = props.rows.items
        .sort((a, b) => b.count - a.count)
        .map((data, index) => ({
            id: index + 1,
            value: data.value,
            count: data.count,
        }));
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

    const filteredRows = rows.filter((row) =>
        row.value.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const timeSecArray = rows.map((row) => row.count);
    const minTime = Math.min(...timeSecArray);
    const maxTime = Math.max(...timeSecArray);
    const timeRange = maxTime - minTime;

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={11.5}>
                <TextField
                    size='small'
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
                                <TableCell style={{width: '70%'}}>{props.columnName}</TableCell>
                                <TableCell style={{width: '30%'}}>{props.columnCount}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                            {filteredRows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        <TableCell style={{ width: '70%' }}>
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
                                                backgroundColor: row.count
                                                    ? getGreenColorScale(timeRange, minTime, row.count)
                                                    : 'white',
                                                padding: '8px',
                                                width: '30%'
                                            }}
                                        >
                                            {row.count}
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
};

export default TableWithLinkAndSearchBar;