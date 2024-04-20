import * as React from 'react';
import {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import {getGreenColorScale} from '../../../utils/utils';
import {minTime} from 'date-fns/constants';

interface PageData {
    page_link: string;
    visits_count: number;
}

interface PagesPopularityChart {
    items: PageData[]
}


interface TableWithLinkProps {
    data: PagesPopularityChart;
    columnName: string;
    columnCount: string;
    additionalColumn?: string;
    labelText: string;
}

export function calcColumnRange(column: number[]): number {
    const minTime = Math.min(...column);
    const maxTime = Math.max(...column);
    return maxTime - minTime;
}

export default function TableWithLink(props: TableWithLinkProps) {
    const [hoveredRowIndex, setHoveredRowIndex] = useState<number | null>(null);

    const {items} = props.data;

    const rows = items
        .sort((a, b) => b.visits_count - a.visits_count)
        .map((data, index) => ({
            id: index + 1,
            pdfName: data.page_link,
            timeSec: data.visits_count,
        }));

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(15);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const timeSecArray = rows.map(row => row.timeSec);
    const timeRange = calcColumnRange(timeSecArray);

    return (
        <div style={{overflow: 'hidden', padding: '10px'}}>
            <TableContainer sx={{height: 500}}>
                <Table stickyHeader size="small" aria-label="sticky table">
                    <TableHead>
                        <TableRow>
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
                                    <TableCell>
                                        <Tooltip
                                            title={row.pdfName}
                                            enterDelay={500}
                                            PopperProps={{
                                                style: {
                                                    width: '500px', // Задайте желаемую ширину
                                                },
                                            }}
                                        >
                                            <div
                                                style={{
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    whiteSpace: 'nowrap',
                                                    maxWidth: '700px',
                                                }}
                                            >
                                                {hoveredRowIndex === index ? (
                                                    <a
                                                        href={row.pdfName}
                                                        style={{
                                                            color: '#405479',
                                                            textDecoration: 'underline',
                                                        }}
                                                    >
                                                        {row.pdfName}
                                                    </a>
                                                ) : row.pdfName.length > 150 ? (
                                                    <a
                                                        href={row.pdfName}
                                                        style={{
                                                            color: '#405479',
                                                            textDecoration: 'underline',
                                                        }}
                                                    >
                                                        {' '}
                                                        {row.pdfName.slice(0, 150) + '...'}
                                                    </a>
                                                ) : (
                                                    <a
                                                        href={row.pdfName}
                                                        style={{
                                                            color: '#405479',
                                                            textDecoration: 'underline',
                                                        }}
                                                    >
                                                        {row.pdfName}
                                                    </a>
                                                )}
                                            </div>
                                        </Tooltip>
                                    </TableCell>
                                    <TableCell
                                        style={{
                                            backgroundColor: row.timeSec ? getGreenColorScale(timeRange, minTime, row.timeSec) : 'white',
                                            padding: '8px',
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
        </div>
    );
}
