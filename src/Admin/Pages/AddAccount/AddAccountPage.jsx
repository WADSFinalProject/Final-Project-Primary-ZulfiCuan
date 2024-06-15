import React from 'react';
import { IconButton, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import AccountForm from "../../Components/AccountForm/AccountForm";
import './AddAccountPage.scss';

const AddAccountPage = ({ onBack }) => {
  return (
    <div className="addAccountPage">
      <div className="header">
        <IconButton className="backButton" onClick={onBack}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h4" className="pageTitle">Add Account</Typography>
      </div>
      <AccountForm />
    </div>
  );
};

export default AddAccountPage;
