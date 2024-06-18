
import React, { useState } from 'react';
import './StorageManager.scss';
import SideBar from '../../Components/sidebar/SideBarManager.jsx';
import Navbar from '../../Components/Navbar/NavbarManager.jsx';
import StorageManager from "./StorageManager.jsx"

function storageManagerPage({togglePage, pages}) {
//   const [showAddAccount, setShowAddAccount] = useState(false); // toggle for account
//   const handleAddAccount = () => {
//     setShowAddAccount(true); // show add account form
//   };

//   const handleBack = () => {
//     setShowAddAccount(false); // hide add account form
//   };

  return (
    <div className="accountPage-admin">
      <SideBar togglePage={togglePage} pages={pages}/>
      <div className="accountContent-admin">
        <Navbar togglePage={togglePage} pages={pages}/>
          <div className="accountTableContainer-admin">
            <div className="accountHeader-admin">
              <h1 className="accountTitle-admin">Storage</h1>
            </div>
          <StorageManager togglePage={togglePage} pages={pages}/>
          </div>
      </div>
    </div>
  );
}

export default storageManagerPage;
