
import React, { useState } from 'react';
import './Account.scss';
import SideBar from "../../Components/sidebar/SideBar.jsx"
import Navbar from '../../Components/Navbar/Navbar.jsx';
import AccountTable from '../../Components/AccountTable/AccountTable.jsx';
import CreateAccountButton from '../../Components/AccountTable/CreateAccountButton.jsx';
import AddAccountPage from '../../Pages/AddAccount/AddAccountPage.jsx';

function Account({togglePage, pages}) {
  const [showAddAccount, setShowAddAccount] = useState(false);

  const handleAddAccount = () => {
    setShowAddAccount(true);
  };

  const handleBack = () => {
    setShowAddAccount(false);
  };

  return (
    <div className="accountPage">
      <SideBar togglePage={togglePage}/>
      <div className="accountContent">
        <Navbar />
        {showAddAccount ? (
          <AddAccountPage onBack={handleBack} />
        ) : (
          <div className="accountTableContainer">
            <div className="accountHeader">
              <h1 className="accountTitle">Account</h1>
              <CreateAccountButton onClick={handleAddAccount} />
            </div>
          <AccountTable />
          </div>

        )}
      </div>
    </div>
  );
}

export default Account;
