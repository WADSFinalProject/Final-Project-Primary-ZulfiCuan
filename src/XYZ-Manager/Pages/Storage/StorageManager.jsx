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
import EditAccountManager from '../../Components/PopUpManager/EditAccountManager';
import DeleteAccountManager from '../../Components/PopUpManager/DeleteAccountManager';

const columns = [
  { id: 'batchid', label: 'Batch ID', minWidth: 170, align: 'center' },
  { id: 'shippingid', label: 'Shipping ID', minWidth: 170, align: 'center' },
  { id: 'storageid', label: 'Storage ID', minWidth: 170, align: 'center' },
  { id: 'weight', label: 'Weight', minWidth: 170, align: 'center' },
  { id: 'storagelocation', label: 'Storage Location', minWidth: 170, align: 'center' },
  { id: 'datereceived', label: 'Date Received', minWidth: 170, align: 'center' },
  { id: 'action', label: 'Action', minWidth: 170, align: 'center' },
];

const initialRows = [
  { batchid: 'U108', shippingid: '9311', storageid: '2481', weight: '24 kg', storagelocation: 'Warehouse 1',datereceived: '21/04/1987'},
  { batchid: 'U109', shippingid: '9312', storageid: '2482', weight: '22.4 kg', storagelocation: 'Warehouse 2',datereceived: '20/04/1987'},
  { batchid: 'U110', shippingid: '9313', storageid: '2483', weight: '23 kg', storagelocation: 'Warehouse 3', datereceived: '19/04/1987'},
  { batchid: 'U111', shippingid: '9314', storageid: '2484', weight: '21 kg', storagelocation: 'Warehouse 3', datereceived: '18/04/1987'},
  { batchid: 'U112', shippingid: '9315', storageid: '2485', weight: '21.3 kg', storagelocation: 'Warehouse 1', datereceived: '17/04/1987'},
  { batchid: 'U113', shippingid: '9316', storageid: '2486', weight: '20 kg', storagelocation: 'Warehouse 1', datereceived: '16/04/1987'},
  { batchid: 'U114', shippingid: '9317', storageid: '2487', weight: '23.4 kg', storagelocation: 'Warehouse 2', datereceived: '15/04/1987'},
  { batchid: 'U115', shippingid: '9318', storageid: '2488', weight: '20.9 kg', storagelocation: 'Warehouse 2', datereceived: '14/04/1987'},
  { batchid: 'U116', shippingid: '9319', storageid: '2489', weight: '23.2 kg', storagelocation: 'Warehouse 3', datereceived: '13/04/1987'},
  { batchid: 'U117', shippingid: '9320', storageid: '2490', weight: '22.9 kg', storagelocation: 'Warehouse 1', datereceived: '12/04/1987'},
  // ... (rest of the rows)
];

export default function StorageManager({togglePage, pages}) {
  const [page, setPage] = useState(0);
  const rowsPerPage = 8;
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
    console.log('Updated account details:', updatedAccount);
    const updatedRows = rows.map((row) =>
      row.batchid === updatedAccount.batchid ? updatedAccount : row
    );
    setRows(updatedRows);
    handleEditClose();
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: '16px', maxWidth: '100%' }}>
      <TableContainer sx={{ maxHeight: 'calc(100vh - 150px)', overflowX: 'auto' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{ minWidth: column.minWidth, backgroundColor: '#002855', color: 'white', textAlign: 'center' }}
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
                        borderBottom: '1px solid #04315b',
                        textAlign: column.align,
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
                            onClick={() => handleEditOpen(row)}
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
                            onClick={handleDeleteOpen}
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
      <EditAccountManager
        open={editOpen}
        onClose={handleEditClose}
        accountDetails={selectedAccount}
        onSave={handleSaveAccount}
      />
      <DeleteAccountManager
        open={deleteOpen}
        onClose={handleDeleteClose}
      />
    </Paper>
  );
}
