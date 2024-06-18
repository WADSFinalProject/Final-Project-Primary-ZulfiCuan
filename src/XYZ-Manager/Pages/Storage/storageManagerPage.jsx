
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
    <div className="accountPage-manager">
      <SideBar togglePage={togglePage} pages={pages}/>
      <div className="accountContent-manager">
        <Navbar togglePage={togglePage} pages={pages}/>
          <div className="accountTableContainer-manager">
            <div className="accountHeader-manager">
              <h1 className="accountTitle-manager">Storage</h1>
            </div>
          <StorageManager togglePage={togglePage} pages={pages}/>
          </div>
      </div>
    </div>
  );
}

export default storageManagerPage;
