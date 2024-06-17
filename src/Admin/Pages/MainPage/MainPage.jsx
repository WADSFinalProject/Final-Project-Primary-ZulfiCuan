import React from 'react';
import useTogglePages from "../PageHandler/useTogglePages";
import Dashboard from "../dashboard/Dashboard.jsx";
import Account from "../Account/Account.jsx";
import SideBar from '../../Components/sidebar/SideBar.jsx'; // Import SideBar
import Centra from "../Centra/Centra.jsx";
import { useState } from 'react';


export const pageLogic = [
  [true, false, false ], // rescale page, notification page
  [false], // account-page
];

function MainPage() {
  const [pages, togglePage] = useTogglePages(pageLogic);

  return (
    <div>
      {pages[0][0] && <Dashboard togglePage={togglePage} pages={pages} />}
      {pages[0][1] && <Centra togglePage={togglePage}/>}
      {pages[0][2] && <Account togglePage={togglePage}/>}
    </div>
  );
}

export default MainPage;
