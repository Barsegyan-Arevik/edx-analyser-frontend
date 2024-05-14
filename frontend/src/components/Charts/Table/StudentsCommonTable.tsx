import * as React from 'react'
import {useEffect, useState} from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import {Box, Grid} from '@mui/material'
import {getBlueColorScale} from '../../../utils/utils'
import {Student} from '../../../models/students'

export function getColumnRange(columnName: string, rows) {
    const columnArray = rows.map((row) => row[columnName])

    const minVal = Math.min(...columnArray)
    const maxVal = Math.max(...columnArray)
    const range = maxVal - minVal

    return {range, minVal}
}

export type StudentsCommonTableProps = {
    students: Array<Student>;
    columnNames: Array<string>;
};

export default function StudentsCommonTable(props: StudentsCommonTableProps) {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [searchTerm, _] = useState('')

    useEffect(() => {
        setPage(0)
    }, [searchTerm])

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    const daysRange = getColumnRange('total_days', props.students)
    const hoursRange = getColumnRange('total_hours', props.students)
    const videoWatching = getColumnRange('video_views', props.students)
    const textbookScrolling = getColumnRange('textbook_views', props.students)
    const problemsSolving = getColumnRange('solved_tasks', props.students)
    // const forumActivity = getColumnRange('forum_activity', props.students)

    const cellStyle = {fontSize: '16px', color: '#405479'}

    return (
        <Paper>
            <Box
                sx={{
                    fontSize: 16,
                    p: 1,
                    color: '#405479',
                    alignItems: 'center'
                }}
            ></Box>
            <TableContainer>
                <Grid container>
                    <Grid item xs={12}>
                        <Table stickyHeader size="small" aria-label="sticky table"
                               sx={{borderSpacing: '1px 0', borderCollapse: 'separate', color: '#405479'}}>
                            <TableHead style={{color: '#405479'}}>
                                <TableRow>
                                    {props.columnNames.map(name => (
                                        <TableCell key={name} style={cellStyle}>{name}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                {props.students.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((student, index) => (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={student.username}>
                                        <TableCell style={{fontSize: '16px', color: '#405479'}}>
                                            {student.username}
                                        </TableCell>

                                        <TableCell
                                            style={{
                                                fontSize: '16px',
                                                color: '#000000',
                                                backgroundColor: getBlueColorScale(daysRange.range, daysRange.minVal, student.total_days)
                                            }}
                                        >
                                            {student.total_days}
                                        </TableCell>

                                        <TableCell
                                            style={{
                                                fontSize: '16px',
                                                color: '#000000',
                                                backgroundColor: getBlueColorScale(hoursRange.range, hoursRange.minVal, student.total_hours)
                                            }}
                                        >
                                            {Math.ceil((student.total_hours) / 3600)}
                                        </TableCell>

                                        <TableCell
                                            style={{
                                                fontSize: '16px',
                                                color: '#000000',
                                                backgroundColor: getBlueColorScale(videoWatching.range, videoWatching.minVal, student.video_views)
                                            }}
                                        >
                                            {student.video_views}
                                        </TableCell>

                                        <TableCell
                                            style={{
                                                fontSize: '16px',
                                                color: '#000000',
                                                backgroundColor: getBlueColorScale(textbookScrolling.range, textbookScrolling.minVal, student.textbook_views)
                                            }}
                                        >
                                            {student.textbook_views}
                                        </TableCell>

                                        <TableCell
                                            style={{
                                                fontSize: '16px',
                                                color: '#000000',
                                                backgroundColor: getBlueColorScale(problemsSolving.range, problemsSolving.minVal, student.solved_tasks)
                                            }}
                                        >
                                            {student.solved_tasks}
                                        </TableCell>

                                        {/*<TableCell*/}
                                        {/*    style={{*/}
                                        {/*        fontSize: '16px',*/}
                                        {/*        color: '#405479',*/}
                                        {/*        backgroundColor: getBlueColorScale(forumActivity.range, forumActivity.minVal, student.forum_activity)*/}
                                        {/*    }}*/}
                                        {/*>*/}
                                        {/*    {student.forum_activity}*/}
                                        {/*</TableCell>*/}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[10, 50, 100]}
                component="div"
                count={props.students.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}
