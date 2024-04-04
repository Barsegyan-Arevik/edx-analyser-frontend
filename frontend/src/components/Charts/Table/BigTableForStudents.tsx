import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import { PiStudentBold } from "react-icons/pi";

export type RowData = {
  id: number;
  username: string;
  completion_status: string;
  days_online: string;
  time_on_course: string;
  video_watching: string;
  text_book_scrolling: string;
  promblems_solving: string;
  forum_activity: string;
}

export type BigTableProps = {
    data: string;
    boxTitle: string;
    username: string,
    completionStatus: string,
    daysOnline: string,
    timeOnCourse: string,
    videoWatching: string,
    textbookScrolling: string,
    promblemsSolving: string,
    forumActivity: string,
}


function lerp(a, b, t) {
    return a + (b - a) * t;
}

const colors_triplet_1 = ['#93E4D6', '#FFFBBE', '#FAD8DB']
const colors_triplet_2 = ['#d9f0ff', '#a3d5ff', '#83c9f4']


function getColorScale(timeRange: number, minValue: number, value: number) {
    value = value - minValue;
    const ratio = value / (timeRange); // Max population value

    const purpleColor = [163, 213, 255];
    const mediumBlueColor = [204, 232, 255];
    const paleBlueColor = [217, 240, 255];

    let color: number[];

    if (value <= 0.5) {
        color = paleBlueColor.map((channel, index) =>
            Math.round(lerp(channel, mediumBlueColor[index], ratio))
        );
    } else {
        color = mediumBlueColor.map((channel, index) =>
            Math.round(lerp(channel, purpleColor[index], ratio))
        );
    }
    return `rgb(${color.join(',')})`;
}


function getColumnRange(columnName, rows) {
    const columnArray = rows.map(row => row[columnName]);

    const minVal = Math.min(...columnArray);
    const maxVal = Math.max(...columnArray);
    const range = maxVal - minVal;

    return { range, minVal };
}

function getColor(status) {
    switch (status) {
        case 'Прошел курс':
            return '#02CEA9';
        case 'Начал но не завершил':
            return '#FEF045';
        case 'Не начал':
            return '#F06C79';
        default:
            return '#FFFFFF'; // Белый цвет по умолчанию или другой по вашему усмотрению
    }
}


export default function BigTable(props: BigTableProps) {
  const rows = props.data
    .trim()
    .split('\n')
    .slice(1) // Пропускаем строку с заголовками
    .map((row, index) => {
      const [username, completion_status, days_online,time_on_course, video_watching, text_book_scrolling, problems_solving, forum_activity] = row.split(',');
      return {
            id: index + 1,
            username,
            completion_status,
            days_online: parseInt(days_online, 10),
            time_on_course: parseInt(time_on_course, 10),
            video_watching: parseInt(video_watching, 10),
            text_book_scrolling: parseInt(text_book_scrolling, 10),
            problems_solving: parseInt(problems_solving, 10),
            forum_activity: parseInt(forum_activity, 10)
      };
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

   const daysOnlineRange = getColumnRange('days_online', rows);
   const timeOnCourseRange = getColumnRange('time_on_course', rows);
   const videoWatching = getColumnRange('video_watching', rows);
   const textbookScrolling =  getColumnRange('text_book_scrolling', rows);
   const problemsSolving = getColumnRange('problems_solving', rows);
   const forumActivity = getColumnRange('forum_activity', rows);

   return (
    <Paper sx={{ overflow: 'hidden', padding: '10px', width: '1400px' }}>
      <Box
        sx={{
          fontSize: 16,

          p: 1,
          color: '#405479',
          alignItems: 'center',
        }}
      >

      </Box>
      <TableContainer sx={{ height: 530 }}>
        <Table stickyHeader size="small" aria-label="sticky table" sx={{ borderSpacing: '8px 0', borderCollapse: 'separate', color: '#405479'}}>
          <TableHead style={{color: '#405479'}}>
            <TableRow>
              <TableCell style={{fontSize: '16px', color: '#405479'}}>ID</TableCell>
              <TableCell style={{fontSize: '16px', color: '#405479'}}>{props.username}</TableCell>
              <TableCell style={{fontSize: '16px', color: '#405479'}} >{props.daysOnline}</TableCell>
              <TableCell style={{fontSize: '16px', color: '#405479'}}>{props.timeOnCourse}</TableCell>
              <TableCell style={{fontSize: '16px', color: '#405479'}}>{props.videoWatching}</TableCell>
              <TableCell style={{fontSize: '16px', color: '#405479'}} sx={{ marginRight: '8px' }}>{props.textbookScrolling}</TableCell>
              <TableCell style={{fontSize: '16px', color: '#405479'}}>{props.promblemsSolving}</TableCell>
              <TableCell style={{fontSize: '16px', color: '#405479'}}>{props.forumActivity}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  <TableCell style={{fontSize: '16px',color: '#405479'}} component="th">{row.id}</TableCell>
                  <TableCell
                      style={{fontSize: '16px',color: '#405479'}}
                  >
                        <PiStudentBold size={24} color={getColor(row.completion_status)} />
                        {row.username}
                  </TableCell>

                    <TableCell
                        style={{
                            fontSize: '16px', color: '#405479',
                            backgroundColor: row.days_online ? getColorScale(daysOnlineRange.range, daysOnlineRange.minVal, row.days_online) : 'white'
                        }}
                    >
                            {row.days_online}
                    </TableCell>

                    <TableCell
                            style={{
                                fontSize: '16px',
                                color: '#405479',
                                backgroundColor: row.time_on_course ? getColorScale(timeOnCourseRange.range, timeOnCourseRange.minVal, row.time_on_course) : 'white'
                            }}
                    >
                            {row.time_on_course}
                    </TableCell>

                    <TableCell
                        style={{
                            fontSize: '16px', color: '#405479',
                            backgroundColor: row.video_watching ? getColorScale(videoWatching.range, videoWatching.minVal, row.video_watching) : 'white',
                            padding: '8px',
                        }}
                    >
                        {row.video_watching}
                    </TableCell>

                    <TableCell
                        style={{
                            fontSize: '16px', color: '#405479',
                            backgroundColor: row.text_book_scrolling ? getColorScale(textbookScrolling.range, textbookScrolling.minVal, row.text_book_scrolling) : 'white',
                                padding: '8px'
                        }}
                  >
                      {row.text_book_scrolling}
                  </TableCell>
                  <TableCell
                        style={{
                                fontSize: '16px', color: '#405479',
                                backgroundColor: row.problems_solving ? getColorScale(problemsSolving.range, problemsSolving.minVal, row.problems_solving) : 'white',
                                padding: '8px'
                        }}
                  >
                      {row.problems_solving}
                  </TableCell>
                  <TableCell
                        style={{
                                fontSize: '16px', color: '#405479',
                                backgroundColor: row.forum_activity ? getColorScale(forumActivity.range, forumActivity.minVal, row.forum_activity) : 'white',
                                padding: '8px'
                        }}
                  >
                      {row.forum_activity}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 50, 100]}
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
