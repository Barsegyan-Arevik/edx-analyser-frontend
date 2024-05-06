import * as React from 'react'
import {useEffect, useState} from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import Tooltip, {tooltipClasses, TooltipProps} from '@mui/material/Tooltip'
import {Grid} from '@mui/material'
import {ChartSize, getGreenColorScale} from '../../../utils/utils'
import SearchBar from './SearchBar'
import {styled} from '@mui/material/styles';

export interface RowData {
    value: string;
    count: number;
}

export type CoursePagePopularityTableProps = {
    rows: RowData[];
    columnName: string;
    columnCount: string;
    labelText: string;
    tableSize: ChartSize;
    isLink: boolean;
}

const CoursePagePopularityTable: React.FC<CoursePagePopularityTableProps> = (props) => {
    const rows = props.rows
        .sort((a, b) => b.count - a.count)
        .map((data, index) => ({
            id: index + 1,
            value: data.value,
            count: data.count
        }))
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [searchTerm, setSearchTerm] = useState('')

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

    const filteredRows = rows.filter((row) =>
        row.value.toLowerCase().includes(searchTerm.toLowerCase())
    )


const CustomTooltip = styled(({className, ...props}: TooltipProps) => (
    <Tooltip {...props} classes={{popper: className}}/>
))(({theme}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        padding: 'var(--r)',
        borderBottom: 'var(--h) solid #0000',
        WebkitMask: 'var(--m)',
        mask: 'var(--m)',
        margin: '10px 10px',
        maxWidth: '220px',
        fontSize: '12px',
        background: 'linear-gradient(135deg, #2ec4b6, #405479) border-box',
        color: '#fff',
    },
    ['--r']: '10px',
    ['--h']: '10px',
    ['--p']: '30%',
    ['--m']:
        'conic-gradient(from 30deg at var(--p) 100%, #0000, #000 1deg 30deg, #0000 31deg) 0 100%/100% calc(100% - var(--r)) no-repeat, conic-gradient(at calc(var(--r)/2) calc(var(--r)/2), #000 270deg, #0000 0) 0 0/calc(100% - var(--r)/2) calc(100% - var(--r)/2) padding-box, radial-gradient(50% 50%, #000 98%, #0000) 0 0/var(--r) var(--r) space padding-box',
}));

    const timeSecArray = rows.map((row) => row.count)
    const minTime = Math.min(...timeSecArray)
    const maxTime = Math.max(...timeSecArray)
    const timeRange = maxTime - minTime
    const renderCellValue = (value: string) => {
        if (props.isLink) {
            return <a style={{color: '#405479'}} href={value}>{value}</a>;
        } else {
            return value;
        }
    }
    return (
        <Grid container justifyContent="center" style={{height: props.tableSize.height}}>
            <SearchBar labelText={props.labelText} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <Grid item xs={11}>
                <TableContainer style={{height: props.tableSize.width}}>
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
                                        <TableCell style={{width: '70%'}}>
                                            {row.value.length > 50 ? (
                                                props.isLink ? (
                                                    <CustomTooltip title={row.value} placement="top">
                                                        <a style={{color: '#405479'}} href={row.value}>{row.value.slice(0, 50)}...</a>
                                                    </CustomTooltip>
                                                ) : (
                                                    <Tooltip title={row.value} placement="top">
                                                        <span>{row.value.slice(0, 50)}...</span>
                                                    </Tooltip>
                                                )
                                            ) : (
                                                renderCellValue(row.value)
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
    )
}

export default CoursePagePopularityTable