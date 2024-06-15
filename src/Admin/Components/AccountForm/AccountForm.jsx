import React from 'react';
import { TextField, MenuItem, Button, Box, Typography } from '@mui/material';
import './AccountForm.scss';

const roles = ['XYZ Central', 'Guard Harbour'];

const AccountForm = () => {
  return (
    <div className="formContainer">
      <Typography variant="h6" className="formTitle">Input Data</Typography>
      <Box component="form" noValidate autoComplete="off" className="formBox">
        <div className="formRow">
          <TextField
            label="Full Name"
            variant="outlined"
            className="formInput"
            defaultValue="Mas Budi"
            fullWidth
          />
          <TextField
            label="Password"
            variant="outlined"
            className="formInput"
            defaultValue="xxxxxxxxxx"
            type="password"
            fullWidth
          />
        </div>
        <div className="formRow">
          <TextField
            label="Email"
            variant="outlined"
            className="formInput"
            defaultValue="budimas@centra.com"
            fullWidth
          />
          <TextField
            label="Role"
            variant="outlined"
            className="formInput"
            defaultValue="Guard Harbour"
            select
            fullWidth
          >
            {roles.map((role) => (
              <MenuItem key={role} value={role}>
                {role}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="formRow">
          <TextField
            label="Birth Date"
            variant="outlined"
            className="formInput"
            defaultValue="18/04/1989"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </div>
        <Button variant="contained" color="primary" className="submitButton">
          Confirm
        </Button>
      </Box>
    </div>
  );
};

export default AccountForm;
