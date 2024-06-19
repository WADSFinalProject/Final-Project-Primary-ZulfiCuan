
import React, { useState } from 'react';
import './Account.scss';
import SideBar from "../../Components/sidebar/SideBar.jsx"
import Navbar from '../../Components/Navbar/Navbar.jsx';
import AccountTable from '../../Components/AccountTable/AccountTable.jsx';
import CreateAccountButton from '../../Components/AccountTable/CreateAccountButton.jsx';
import AddAccountPage from '../../Pages/AddAccount/AddAccountPage.jsx';

function Account({togglePage, pages}) {
  const [showAddAccount, setShowAddAccount] = useState(false); // toggle for account
  const handleAddAccount = () => {
    setShowAddAccount(true); // show add account form
  };

  const handleBack = () => {
    setShowAddAccount(false); // hide add account form
  };

  return (
    <div className="accountPage-admin">
      <SideBar togglePage={togglePage}/>
<<<<<<< HEAD
=======
      <div className="fixdash"></div>
>>>>>>> f9a36a0117a8cf9abefd12968133e50afbc7bfd3
      <div className="accountContent-admin">
        <Navbar togglePage={togglePage}/>
        {showAddAccount ? (
          <div className="editAccountContainer-admin">
            <AddAccountPage onBack={handleBack} />
          </div>  
        ) : (
          <div className="accountTableContainer-admin">
            <div className="accountHeader-admin">
              <h1 className="accountTitle-admin">Account</h1>
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
