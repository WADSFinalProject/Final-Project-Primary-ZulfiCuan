import React from 'react';
import useTogglePages from "../../../Storage-Mobile/hooks/useTogglePages.jsx";
import Dashboard from "../Home/Dashboard.jsx";
import Account from "../Account/Account.jsx";
import SideBar from '../../Components/sidebar/SideBar.jsx'; // Import SideBar

const pageLogic = [
  [false, true], // rescale page, notification page
  [false], // account-page
];

function MainPage() {
  const [pages, setTogglePage] = useTogglePages(pageLogic);
  return (
    <div>
      {pages[0][0] && <Dashboard togglePage={setTogglePage} pages={pages} />}
      {pages[0][1] && <Account />}
    </div>
  );
}

export default MainPage;
