import React from 'react';
import { IconButton, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import AccountForm from "../../Components/AddAccount/AccountForm";
import './AddAccountPage.scss';

const AddAccountPage = ({ onBack }) => {
  return (
    <div className="addAccountPage-admin">
      <div className="header">
        <IconButton className="backButton-admin" onClick={onBack}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h4" className="pageTitle-admin">Add Account</Typography>
      </div>
      <AccountForm />
    </div>
  );
};

export default AddAccountPage;
