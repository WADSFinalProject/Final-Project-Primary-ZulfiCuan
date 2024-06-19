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
import EditAccountPopup from '../PopupEditAssest/EditCentraPopup';
import DeleteAccountPopup from '../PopupEditAssest/DeleteAccountPopup';

const columns = [
    { id: 'id', label: 'ID', minWidth: 170, align: 'center' },
    { id: 'manager', label: 'Manager', minWidth: 170, align: 'center' },
    { id: 'phone', label: 'Phone', minWidth: 170, align: 'center' },
    { id: 'location', label: 'Location', minWidth: 170, align: 'center' },
    { id: 'action', label: 'Action', minWidth: 170, align: 'center' },
  ];
  
  const initialRows = [
    { id: 'U108', manager: 'Alice Brown', phone: '123-456-7890', location: 'New York', action: 'Edit' },
    { id: 'U109', manager: 'Bob White', phone: '234-567-8901', location: 'Los Angeles', action: 'Edit' },
    { id: 'U110', manager: 'Charlie Black', phone: '345-678-9012', location: 'Chicago', action: 'Edit' },
    { id: 'U111', manager: 'Diana Green', phone: '456-789-0123', location: 'Houston', action: 'Edit' },
    { id: 'U112', manager: 'Eve Blue', phone: '567-890-1234', location: 'Phoenix', action: 'Edit' },
    { id: 'U113', manager: 'Frank Red', phone: '678-901-2345', location: 'Philadelphia', action: 'Edit' },
    { id: 'U114', manager: 'Grace Yellow', phone: '789-012-3456', location: 'San Antonio', action: 'Edit' },
    { id: 'U115', manager: 'Hank Purple', phone: '890-123-4567', location: 'San Diego', action: 'Edit' },
    { id: 'U116', manager: 'Ivy Cyan', phone: '901-234-5678', location: 'Dallas', action: 'Edit' },
    { id: 'U117', manager: 'Jack Magenta', phone: '012-345-6789', location: 'San Jose', action: 'Edit' },
  ];
  
  

export default function CentraTable() {
  const [page, setPage] = useState(0);
<<<<<<< HEAD
  const rowsPerPage = 10;
=======
  const rowsPerPage = 8;
>>>>>>> f9a36a0117a8cf9abefd12968133e50afbc7bfd3
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
<<<<<<< HEAD
    <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: '16px' }}>
=======
    <Paper sx={{ marginBottom: '1.5rem', width: '100%', overflow: 'hidden', borderRadius: '16px' }}>
>>>>>>> f9a36a0117a8cf9abefd12968133e50afbc7bfd3
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
<<<<<<< HEAD
                  sx={{ minWidth: column.minWidth, backgroundColor: '#002855', color: 'white', textAlign: 'center' }}
=======
                  sx={{ height: '2rem', minWidth: column.minWidth, backgroundColor: '#002855', color: 'white', textAlign: 'center' }}
>>>>>>> f9a36a0117a8cf9abefd12968133e50afbc7bfd3
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
<<<<<<< HEAD
=======
                      padding='none'
>>>>>>> f9a36a0117a8cf9abefd12968133e50afbc7bfd3
                      sx={{
                        color: '#002855',
                        fontWeight: 500,
                        fontFamily: 'var(--font-inter)',
                        borderBottom: '1px solid #04315b', // Adding bottom border to TableCell
<<<<<<< HEAD
                        textAlign: column.align // Ensure alignment is applied
=======
                        textAlign: column.align, // Ensure alignment is applied
                        height: '3rem',
>>>>>>> f9a36a0117a8cf9abefd12968133e50afbc7bfd3
                      }}
                    >
                      {column.id === 'action' ? (
                        <>
                          <IconButton
                            aria-label="edit"
                            sx={{
<<<<<<< HEAD
                              color: '#ffffff',
                              backgroundColor: '#ff7c52',
                              borderRadius: '8px',
                              marginRight: '5px',
=======
                              objectFit: 'contain',
                              width: '1.5rem',
                              height: '1.5rem',
                              color: '#ffffff',
                              backgroundColor: '#ff7c52',
                              borderRadius: '0.5rem',
                              marginRight: '5px',
                              marginY:'0',
>>>>>>> f9a36a0117a8cf9abefd12968133e50afbc7bfd3
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
<<<<<<< HEAD
                              color: '#ffffff',
                              backgroundColor: '#ff7c52',
                              borderRadius: '8px',
=======
                              objectFit: 'contain',
                              width: '1.5rem',
                              height: '1.5rem',
                              color: '#ffffff',
                              backgroundColor: '#ff7c52',
                              borderRadius: '0.5rem',
                              marginY:'0',
>>>>>>> f9a36a0117a8cf9abefd12968133e50afbc7bfd3
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
<<<<<<< HEAD
        rowsPerPageOptions={[10]}
=======
        rowsPerPageOptions={[8]}
>>>>>>> f9a36a0117a8cf9abefd12968133e50afbc7bfd3
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
      <DeleteAccountPopup
        open={deleteOpen}
        onClose={handleDeleteClose}
        // onDelete={handleDeleteAccount}
      />
    </Paper>
  );
}
