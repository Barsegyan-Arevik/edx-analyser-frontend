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
import Tooltip from '@mui/material/Tooltip';
import {Box} from '@mui/material';
import {getGreenColorScale} from '../../../utils/utils';

export type RowData = {
    id: number;
    user: string;
    timeSec: string;
    percent?: number;
}

export type TableWithLinkProps = {
    data: string;
    boxTitle: string;
    columnName: string;
    columnCount: string;
    additionalColumn?: string;
    labelText: string;
}

export default function TableWithLink(props: TableWithLinkProps) {
    const [hoveredRowIndex, setHoveredRowIndex] = useState<number | null>(null);

    const rows = props.data
        .trim()
        .split('\n')
        .slice(1) // Пропустить первую строку (заголовки столбцов)
        .map((row, index) => {
            const [pdfName, scrollingAmount, percent] = row.split(',');
            return {pdfName, timeSec: parseInt(scrollingAmount, 10), percent: parseInt(percent, 10)};
        })
        .sort((a, b) => b.timeSec - a.timeSec) // Сортировка по убыванию
        .map((data, index) => ({
            ...data,
            id: index + 1
        }));

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(15);
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

    const timeSecArray = rows.map(row => row.timeSec);
    const minTime = Math.min(...timeSecArray);
    const maxTime = Math.max(...timeSecArray);
    const timeRange = maxTime - minTime;

    const percentArray = rows.map(row => row.percent);
    const minPercent = Math.min(...percentArray);
    const maxPercent = Math.max(...percentArray);
    const timeRangePercents = maxPercent - minPercent;

    return (
        <Paper sx={{overflow: 'hidden', padding: '10px', width: '1300px'}}>
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
                }}
            />
            <TableContainer sx={{height: 500}}>
                <Table stickyHeader size="small" aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>{props.columnName}</TableCell>
                            <TableCell>{props.columnCount}</TableCell>
                            {/*<TableCell>{props.additionalColumn}</TableCell>*/}
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.id}
                                    onMouseEnter={() => setHoveredRowIndex(index)}
                                    onMouseLeave={() => setHoveredRowIndex(null)}
                                >
                                    <TableCell component="th">{row.id}</TableCell>
                                    <TableCell>
                                        <Tooltip title={row.pdfName} enterDelay={500}
                                            PopperProps={{
                                                style: {
                                                    width: '500px', // Задайте желаемую ширину
                                                },
                                            }}>
                                            <div
                                                style={{
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    whiteSpace: 'nowrap',
                                                    maxWidth: '1000px'
                                                }}
                                            >
                                                {hoveredRowIndex === index ?
                                                    <a href={row.pdfName} style={{
                                                        color: '#405479',
                                                        textDecoration: 'underline'
                                                    }}>{row.pdfName}</a> : (row.pdfName.length > 150 ?
                                                        <a href={row.pdfName} style={{
                                                            color: '#405479',
                                                            textDecoration: 'underline'
                                                        }}> {row.pdfName.slice(0, 150) + '...'}</a> :
                                                        <a href={row.pdfName} style={{
                                                            color: '#405479',
                                                            textDecoration: 'underline'
                                                        }}>{row.pdfName}</a>)}
                                            </div>
                                        </Tooltip>
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
            <TablePagination
                rowsPerPageOptions={[15, 50, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
