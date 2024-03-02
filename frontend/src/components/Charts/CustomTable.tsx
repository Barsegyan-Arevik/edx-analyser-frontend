// import * as React from 'react';
// import Box from '@mui/material/Box';
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

// const columns: GridColDef[] = [
//   { field: 'id', headerName: 'ID', width: 60 },
//   {
//     field: 'firstName',
//     headerName: 'First name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'lastName',
//     headerName: 'Last name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 110,
//     editable: true,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params: GridValueGetterParams) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// export default function CustomTable() {
//   return (
//     <Box sx={{ height: 400, width: "700px" }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: {
//               pageSize: 5,
//             },
//           },
//         }}
//         pageSizeOptions={[5]}
//         disableRowSelectionOnClick
//       />
//     </Box>
//   );
// }


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';




// const columns: GridColDef[] = [
//   { field: 'id', headerName: 'ID', width: 60 },
//   {
//     field: 'user_name',
//     headerName: 'User Name',
//     width: 200,
//     editable: true,
//   },
//   {
//     field: 'user_id',
//     headerName: 'User ID',
//     width: 150,
//     editable: true,
//   }
// ];

// type CustomTableProps = {
//     data: string;
// }
// // Извлечение строк из уникальных имен пользователей и их идентификаторов

// export default function CustomTable({data}: CustomTableProps) {

//   const rows = data
//     .trim()
//     .split('\n')
//     .slice(1) // Пропускаем строку с заголовками
//     .map((row, index) => {
//       const [user_name, user_id] = row.trim().split(/\s+/);
//       return { id: index + 1, user_name, user_id };
//     });

//   return (
//     <Box sx={{ height: 400, width: "700px" }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: {
//               pageSize: 5,
//             },
//           },
//         }}
//         disableRowSelectionOnClick
//       />
//     </Box>
//   );
// }


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
import { SlMagnifier } from "react-icons/sl";

interface RowData {
  id: number;
  user: string;
  timeSec: string;
}

interface CustomTableProps {
  rows: RowData[];
  boxTitle: string;
  columnName: string;
  columnCount: string;
  labelText: string;
}

export default function CustomTable({ rows, boxTitle, columnName, columnCount, labelText }: CustomTableProps) {
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
    <Paper sx={{ overflow: 'hidden', padding: '10px', width: '600px' }}>
      <Box
        sx={{
          fontSize: 16,
          p: 1,
          color: '#405479',
          alignItems: 'center',
        }}
      >
        {boxTitle}

      </Box>
      <TextField
        size="small"
        label={labelText}
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
      <TableContainer sx={{ height: 360 }}>
        <Table stickyHeader size="small" aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>{columnName}</TableCell>
              <TableCell>{columnCount}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  <TableCell component="th">{row.id}</TableCell>
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
