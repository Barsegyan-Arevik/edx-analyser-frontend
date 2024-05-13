import * as React from 'react'
import { useEffect, useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import Tooltip from '@mui/material/Tooltip'
import { Grid } from '@mui/material'
import { ChartSize, getGreenColorScale } from '../../../utils/utils'
import SearchBar from './SearchBar'

export interface RowData {
    value: string;
    count: number;
    uniqueViews: number;
    fragments: string;
}

export type TableThreeColumnsProps = {
    rows: RowData[];
    columnName: string;
    columnCount: string;
    columnUniqueViews: string;
    labelText: string;
    size: ChartSize;
}

export default function VideoPopularityTable(props: TableThreeColumnsProps) {
    const { rows, columnName, columnCount, columnUniqueViews } = props

    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [searchTerm, setSearchTerm] = useState('')
    const [sortColumn, setSortColumn] = useState('')
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

    useEffect(() => {
        setPage(0)
    }, [searchTerm])

    const handleChangePage = (_: unknown, newPage: number) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    const handleSort = (column: string) => {
        if (sortColumn === column) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
        } else {
            setSortColumn(column)
            setSortDirection('asc')
        }
    }

    const sortedRows = rows.sort((a, b) => {
        const aValue = a[sortColumn]
        const bValue = b[sortColumn]
        if (sortDirection === 'asc') {
            return aValue > bValue ? 1 : -1
        } else {
            return aValue < bValue ? 1 : -1
        }
    })

    const filteredRows = sortedRows.filter(row =>
        row.value.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const timeSecArray = sortedRows.map(row => row.count)
    const minTime = Math.min(...timeSecArray)
    const maxTime = Math.max(...timeSecArray)
    const timeRange = maxTime - minTime

    const uniqueViewsArray = sortedRows.map(row => row.uniqueViews)
    const minUniqueViews = Math.min(...uniqueViewsArray)
    const maxUniqueViews = Math.max(...uniqueViewsArray)
    const uniqueViewsRange = maxUniqueViews - minUniqueViews

    return (
        <Grid container justifyContent="center" style={{height: props.size.height}}>
            <SearchBar labelText={props.labelText} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Grid item xs={11.5}>
                <TableContainer sx={{ height: props.size.width }}>
                    <Table stickyHeader size="small" aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell onClick={() => handleSort('value')} style={{ width: '40%' }}>
                                    {columnName} {sortColumn === 'value' && (sortDirection === 'asc' ? '▲' : '▼')}
                                </TableCell>
                                <TableCell onClick={() => handleSort('count')} style={{ width: '20%' }}>
                                    {columnCount} {sortColumn === 'count' && (sortDirection === 'asc' ? '▲' : '▼')}
                                </TableCell>
                                <TableCell onClick={() => handleSort('uniqueViews')} style={{ width: '20%' }}>
                                    {columnUniqueViews} {sortColumn === 'uniqueViews' && (sortDirection === 'asc' ? '▲' : '▼')}
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            {filteredRows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        <TableCell style={{ width: '60%' }}>
                                            {row.value.length > 43 ? (
                                                <Tooltip title={row.value} placement="top">
                                                    <span>{row.value.slice(0, 43)}...</span>
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
                                         <TableCell
                                            style={{
                                                padding: '8px',
                                                width: '20%'
                                            }}
                                        >
                                            {row.fragments}
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
    )
}
