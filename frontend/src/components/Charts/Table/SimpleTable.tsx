import * as React from 'react';
import {useEffect, useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import {Box} from '@mui/material';

export type RowData = {
    id: number;
    user: string;
    timeSec: string;
}

export type SimpleTableProps = {
    data: string;
    boxTitle: string;
    columnName: string;
    columnCount: string;
    labelText: string;
}

export default function SimpleTable(props: SimpleTableProps) {
    const rows = props.data
        .trim()
        .split('\n')
        .slice(1) // Пропускаем строку с заголовками
        .map((row, index) => {
            const [user, timeSec] = row.trim().split(/\s+/);
            return {id: index + 1, user, timeSec};
        });
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

    const filteredRows = rows.filter(row =>
        row.user.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Paper sx={{overflow: 'hidden', padding: '10px', width: '600px'}}>
            <Box
                sx={{
                    fontSize: 16,
                    p: 1,
                    color: '#405479',
                    alignItems: 'center',
                }}
            >
                {props.boxTitle}

            </Box>

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
                }} // Добавлено смещение для выравнивания с кнопкой модального окна
            />
            <TableContainer sx={{height: 360}}>
                <Table stickyHeader size="small" aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>{props.columnName}</TableCell>
                            <TableCell>{props.columnCount}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                        {filteredRows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                    <TableCell>{row.user}</TableCell>
                                    <TableCell>{row.timeSec}</TableCell>
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
