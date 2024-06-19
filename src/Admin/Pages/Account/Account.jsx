import React, { useState } from 'react';
import './Account.scss';
import SideBar from "../../Components/sidebar/SideBar.jsx";
import Navbar from '../../Components/Navbar/Navbar.jsx';
import AccountTable from '../../Components/AccountTable/AccountTable.jsx';
import CreateAccountButton from '../../Components/AccountTable/CreateAccountButton.jsx';
import AddAccountPage from '../../Pages/AddAccount/AddAccountPage.jsx';
import { useSpring, animated } from '@react-spring/web';

function Account({ togglePage, pages }) {
  const [showAddAccount, setShowAddAccount] = useState(false);
  const [accounts, setAccounts] = useState([
    { id: 'U108', name: 'John Doe', email: 'johndoe@centra.com', password: 'xxxxxxxxx', birthDate: '12/04/1987', role: 'Admin' },
    { id: 'U109', name: 'Jane Smith', email: 'janesmith@centra.com', password: 'xxxxxxxxx', birthDate: '05/15/1990', role: 'User' },
    // ... (other initial rows)
  ]);

  const handleAddAccount = () => {
    setShowAddAccount(true);
  };

  const handleBack = () => {
    setShowAddAccount(false);
  };

  const handleSaveAccount = (newAccount) => {
    setAccounts((prevAccounts) => [...prevAccounts, newAccount]);
    setShowAddAccount(false);
  };

  const widgetSpring = useSpring({ config: {tension: 170, friction: 60}, from: { x: 500, opacity: 0 }, to: { x: 0, opacity: 1 }});


  return (
    <div className="accountPage-admin">
      <SideBar togglePage={togglePage} />
      <div className="fixdash"></div>
      <div className="accountContent-admin">
        <Navbar togglePage={togglePage} />
        {showAddAccount ? (
          <div className="editAccountContainer-admin">
            <AddAccountPage onBack={handleBack} onSaveAccount={handleSaveAccount} />
          </div>
        ) : (
          <div className="accountTableContainer-admin">
            <div className="accountHeader-admin">
              <h1 className="accountTitle-admin">Account</h1>
              <CreateAccountButton onClick={handleAddAccount} />
            </div>
            <animated.div style={widgetSpring} className="accountTableWrapper-admin">
            <AccountTable accounts={accounts} setAccounts={setAccounts} />
            </animated.div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Account;
