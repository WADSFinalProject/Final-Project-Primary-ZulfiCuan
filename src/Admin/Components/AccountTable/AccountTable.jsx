import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import EditAccountPopup from '../PopupEditAssest/EditAccountPopup'; // Import the EditAccountPopup component

const columns = [
  { id: 'id', label: 'ID', minWidth: 170, align: 'center' },
  { id: 'name', label: 'Name', minWidth: 170, align: 'center' },
  { id: 'email', label: 'Email', minWidth: 170, align: 'center' },
  { id: 'password', label: 'Password', minWidth: 170, align: 'center' },
  { id: 'birthDate', label: 'Birth Date', minWidth: 170, align: 'center' },
  { id: 'role', label: 'Role', minWidth: 170 }, // New column for Role
  { id: 'action', label: 'Action', minWidth: 170, align: 'center' },
];

const initialRows = [
  // { id: 'U108', name: 'John Doe', email: 'johndoe@centra.com', password: 'xxxxxxxxx', birthDate: '12/04/1987' },
  // { id: 'U109', name: 'Jane Smith', email: 'janesmith@centra.com', password: 'xxxxxxxxx', birthDate: '05/15/1990' },
  // { id: 'U110', name: 'Mike Johnson', email: 'mikejohnson@centra.com', password: 'xxxxxxxxx', birthDate: '08/23/1985' },
  // { id: 'U111', name: 'Emily Davis', email: 'emilydavis@centra.com', password: 'xxxxxxxxx', birthDate: '11/19/1992' },
  { id: 'U108', name: 'John Doe', email: 'johndoe@centra.com', password: 'xxxxxxxxx', birthDate: '12/04/1987', role: 'Admin' },
  { id: 'U109', name: 'Jane Smith', email: 'janesmith@centra.com', password: 'xxxxxxxxx', birthDate: '05/15/1990', role: 'User' },
  { id: 'U110', name: 'Mike Johnson', email: 'mikejohnson@centra.com', password: 'xxxxxxxxx', birthDate: '08/23/1985', role: 'User' },
  { id: 'U111', name: 'Emily Davis', email: 'emilydavis@centra.com', password: 'xxxxxxxxx', birthDate: '11/19/1992', role: 'Admin' },
  { id: 'U108', name: 'John Doe', email: 'johndoe@centra.com', password: 'xxxxxxxxx', birthDate: '12/04/1987', role: 'Admin' },
  { id: 'U109', name: 'Jane Smith', email: 'janesmith@centra.com', password: 'xxxxxxxxx', birthDate: '05/15/1990', role: 'User' },
  { id: 'U110', name: 'Mike Johnson', email: 'mikejohnson@centra.com', password: 'xxxxxxxxx', birthDate: '08/23/1985', role: 'User' },
  { id: 'U111', name: 'Emily Davis', email: 'emilydavis@centra.com', password: 'xxxxxxxxx', birthDate: '11/19/1992', role: 'Admin' },
  { id: 'U108', name: 'John Doe', email: 'johndoe@centra.com', password: 'xxxxxxxxx', birthDate: '12/04/1987', role: 'Admin' },
  { id: 'U109', name: 'Jane Smith', email: 'janesmith@centra.com', password: 'xxxxxxxxx', birthDate: '05/15/1990', role: 'User' },
  { id: 'U110', name: 'Mike Johnson', email: 'mikejohnson@centra.com', password: 'xxxxxxxxx', birthDate: '08/23/1985', role: 'User' },
  { id: 'U111', name: 'Emily Davis', email: 'emilydavis@centra.com', password: 'xxxxxxxxx', birthDate: '11/19/1992', role: 'Admin' },
  { id: 'U108', name: 'John Doe', email: 'johndoe@centra.com', password: 'xxxxxxxxx', birthDate: '12/04/1987', role: 'Admin' },
  { id: 'U109', name: 'Jane Smith', email: 'janesmith@centra.com', password: 'xxxxxxxxx', birthDate: '05/15/1990', role: 'User' },
  { id: 'U110', name: 'Mike Johnson', email: 'mikejohnson@centra.com', password: 'xxxxxxxxx', birthDate: '08/23/1985', role: 'User' },
  { id: 'U111', name: 'Emily Davis', email: 'emilydavis@centra.com', password: 'xxxxxxxxx', birthDate: '11/19/1992', role: 'Admin' },
  { id: 'U108', name: 'John Doe', email: 'johndoe@centra.com', password: 'xxxxxxxxx', birthDate: '12/04/1987', role: 'Admin' },
  { id: 'U109', name: 'Jane Smith', email: 'janesmith@centra.com', password: 'xxxxxxxxx', birthDate: '05/15/1990', role: 'User' },
  { id: 'U110', name: 'Mike Johnson', email: 'mikejohnson@centra.com', password: 'xxxxxxxxx', birthDate: '08/23/1985', role: 'User' },
  { id: 'U111', name: 'Emily Davis', email: 'emilydavis@centra.com', password: 'xxxxxxxxx', birthDate: '11/19/1992', role: 'Admin' },
  { id: 'U108', name: 'John Doe', email: 'johndoe@centra.com', password: 'xxxxxxxxx', birthDate: '12/04/1987', role: 'Admin' },
  { id: 'U109', name: 'Jane Smith', email: 'janesmith@centra.com', password: 'xxxxxxxxx', birthDate: '05/15/1990', role: 'User' },
  { id: 'U110', name: 'Mike Johnson', email: 'mikejohnson@centra.com', password: 'xxxxxxxxx', birthDate: '08/23/1985', role: 'User' },
  { id: 'U111', name: 'Emily Davis', email: 'emilydavis@centra.com', password: 'xxxxxxxxx', birthDate: '11/19/1992', role: 'Admin' },
  { id: 'U108', name: 'John Doe', email: 'johndoe@centra.com', password: 'xxxxxxxxx', birthDate: '12/04/1987', role: 'Admin' },
  { id: 'U109', name: 'Jane Smith', email: 'janesmith@centra.com', password: 'xxxxxxxxx', birthDate: '05/15/1990', role: 'User' },
  { id: 'U110', name: 'Mike Johnson', email: 'mikejohnson@centra.com', password: 'xxxxxxxxx', birthDate: '08/23/1985', role: 'User' },
  { id: 'U111', name: 'Emily Davis', email: 'emilydavis@centra.com', password: 'xxxxxxxxx', birthDate: '11/19/1992', role: 'Admin' },
  { id: 'U108', name: 'John Doe', email: 'johndoe@centra.com', password: 'xxxxxxxxx', birthDate: '12/04/1987', role: 'Admin' },
  { id: 'U109', name: 'Jane Smith', email: 'janesmith@centra.com', password: 'xxxxxxxxx', birthDate: '05/15/1990', role: 'User' },
  { id: 'U110', name: 'Mike Johnson', email: 'mikejohnson@centra.com', password: 'xxxxxxxxx', birthDate: '08/23/1985', role: 'User' },
  { id: 'U111', name: 'Emily Davis', email: 'emilydavis@centra.com', password: 'xxxxxxxxx', birthDate: '11/19/1992', role: 'Admin' },
  { id: 'U108', name: 'John Doe', email: 'johndoe@centra.com', password: 'xxxxxxxxx', birthDate: '12/04/1987', role: 'Admin' },
  { id: 'U109', name: 'Jane Smith', email: 'janesmith@centra.com', password: 'xxxxxxxxx', birthDate: '05/15/1990', role: 'User' },
  { id: 'U110', name: 'Mike Johnson', email: 'mikejohnson@centra.com', password: 'xxxxxxxxx', birthDate: '08/23/1985', role: 'User' },
  { id: 'U111', name: 'Emily Davis', email: 'emilydavis@centra.com', password: 'xxxxxxxxx', birthDate: '11/19/1992', role: 'Admin' },
  { id: 'U108', name: 'John Doe', email: 'johndoe@centra.com', password: 'xxxxxxxxx', birthDate: '12/04/1987', role: 'Admin' },
  { id: 'U109', name: 'Jane Smith', email: 'janesmith@centra.com', password: 'xxxxxxxxx', birthDate: '05/15/1990', role: 'User' },
  { id: 'U110', name: 'Mike Johnson', email: 'mikejohnson@centra.com', password: 'xxxxxxxxx', birthDate: '08/23/1985', role: 'User' },
  { id: 'U111', name: 'Emily Davis', email: 'emilydavis@centra.com', password: 'xxxxxxxxx', birthDate: '11/19/1992', role: 'Admin' },
  { id: 'U108', name: 'John Doe', email: 'johndoe@centra.com', password: 'xxxxxxxxx', birthDate: '12/04/1987', role: 'Admin' },
  { id: 'U109', name: 'Jane Smith', email: 'janesmith@centra.com', password: 'xxxxxxxxx', birthDate: '05/15/1990', role: 'User' },
  { id: 'U110', name: 'Mike Johnson', email: 'mikejohnson@centra.com', password: 'xxxxxxxxx', birthDate: '08/23/1985', role: 'User' },
  { id: 'U111', name: 'Emily Davis', email: 'emilydavis@centra.com', password: 'xxxxxxxxx', birthDate: '11/19/1992', role: 'Admin' },
  { id: 'U108', name: 'John Doe', email: 'johndoe@centra.com', password: 'xxxxxxxxx', birthDate: '12/04/1987', role: 'Admin' },
  { id: 'U109', name: 'Jane Smith', email: 'janesmith@centra.com', password: 'xxxxxxxxx', birthDate: '05/15/1990', role: 'User' },
  { id: 'U110', name: 'Mike Johnson', email: 'mikejohnson@centra.com', password: 'xxxxxxxxx', birthDate: '08/23/1985', role: 'User' },
  { id: 'U111', name: 'Emily Davis', email: 'emilydavis@centra.com', password: 'xxxxxxxxx', birthDate: '11/19/1992', role: 'Admin' },
];

export default function AccountableTable() {
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [rows, setRows] = useState(initialRows);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleEditOpen = (account) => {
    setSelectedAccount(account);
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleSaveAccount = (updatedAccount) => {
    console.log('Updated account details:', updatedAccount); // Debugging line
    // Update the rows with the new account details
    const updatedRows = rows.map((row) =>
      row.id === updatedAccount.id ? updatedAccount : row
    );
    setRows(updatedRows);
    handleEditClose(); // Close the edit popup
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: '16px' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{ minWidth: column.minWidth, backgroundColor: '#002855', color: 'white' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ backgroundColor: '#ebebeb' }}>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rowIndex) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      sx={{
                        color: '#002855',
                        fontWeight: 500,
                        fontFamily: 'var(--font-inter)',
                        borderBottom: '1px solid #04315b', // Adding bottom border to TableCell
                      }}
                    >
                      {column.id === 'action' ? (
                        <>
                          <IconButton
                            aria-label="edit"
                            sx={{
                              color: '#ffffff',
                              backgroundColor: '#ff7c52',
                              borderRadius: '8px',
                              marginRight: '5px',
                              '&:hover': {
                                backgroundColor: '#ff6a3e',
                              },
                            }}
                            onClick={() => handleEditOpen(row)} // Open edit popup on click
                          >
                            <EditOutlinedIcon />
                          </IconButton>
                          <IconButton
                            aria-label="delete"
                            sx={{
                              color: '#ffffff',
                              backgroundColor: '#ff7c52',
                              borderRadius: '8px',
                              '&:hover': {
                                backgroundColor: '#ff6a3e',
                              },
                            }}
                            onClick={handleDeleteOpen} // Open delete popup on click
                          >
                            <DeleteOutlineIcon />
                          </IconButton>
                        </>
                      ) : (
                        value
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={columns.length} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{ backgroundColor: '#ebebeb' }}
        rowsPerPageOptions={[10]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
      {/* Edit popup */}
      <EditAccountPopup
        open={editOpen}
        onClose={handleEditClose}
        accountDetails={selectedAccount}
        onSave={handleSaveAccount}
      />
      {/* Delete popup */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={deleteOpen}
        onClick={handleDeleteClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Paper>
  );
}