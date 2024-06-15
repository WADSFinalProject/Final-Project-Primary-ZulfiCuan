import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const EditAccountPopup = ({ open, onClose, accountDetails, onSave }) => {
  const [formValues, setFormValues] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    birthDate: '',
  });

  useEffect(() => {
    if (accountDetails) {
      setFormValues(accountDetails);
    }
  }, [accountDetails]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSave = () => {
    console.log('Saving:', formValues); // Debugging line
    onSave(formValues);
  };



  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: '20px', // Rounded corners for the dialog
        },
      }}
    >
      <DialogTitle sx={{ position: 'relative', paddingBottom: 0 }}>
        Edit Account
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              label="ID"
              type="text"
              fullWidth
              name="id"
              value={formValues.id}
              onChange={handleChange}
              disabled
              InputProps={{
                sx: { borderRadius: '10px' }, // Rounded corners for text fields
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              label="Full Name"
              type="text"
              fullWidth
              name="name"
              value={formValues.name}
              onChange={handleChange}
              InputProps={{
                sx: { borderRadius: '10px' }, // Rounded corners for text fields
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              label="Email"
              type="email"
              fullWidth
              name="email"
              value={formValues.email}
              onChange={handleChange}
              InputProps={{
                sx: { borderRadius: '10px' }, // Rounded corners for text fields
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              label="Password"
              type="password"
              fullWidth
              name="password"
              value={formValues.password}
              onChange={handleChange}
              InputProps={{
                sx: { borderRadius: '10px' }, // Rounded corners for text fields
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              label="Birthdate"
              type="date"
              fullWidth
              name="birthDate"
              value={formValues.birthDate}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                sx: { borderRadius: '10px' }, // Rounded corners for text fields
              }}
            />
          </Grid>
          <Grid item xs={6}>
  <FormControl fullWidth margin="dense">
    <InputLabel>Role</InputLabel>
    <Select
      name="role"
      value={formValues.role}
      onChange={handleChange}
      label="Role"
      sx={{ borderRadius: '10px' }} // Rounded corners for dropdown
    >
      <MenuItem value="XYZ">XYZ</MenuItem>
      <MenuItem value="Central">Central</MenuItem>
      <MenuItem value="Harbour">Harbour</MenuItem>
    </Select>
  </FormControl>
</Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ paddingRight: '24px', paddingBottom: '24px' }}>
        <Button
          onClick={handleSave}
          color="primary"
          variant="contained"
          sx={{
            backgroundColor: '#04315b',
            borderRadius: '13px', // Rounded corners for the button
            '&:hover': {
              backgroundColor: '#031d39',
            },
          }}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditAccountPopup;
