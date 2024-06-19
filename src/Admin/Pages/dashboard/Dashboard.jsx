import React from 'react';
import './Dashboard.scss';
import SideBar from '../../Components/sidebar/SideBar.jsx';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import Widget from '../../Components/widget/Widget.jsx';
import WelcomeWidget from '../../Components/widget/Welcomewidget.jsx';
import Chart from '../../Components/charts/LineChart.jsx';
import NotificationWidget from '../../Components/widget/NotificationWidget.jsx';

function Dashboard({ togglePage, pages }) {
  return (
    <div className="dashboardPage-admin">
      <SideBar togglePage={togglePage} pages={pages} />
      <div className="fixdash"></div>
      <div className="dashboardContent-admin">
        <Navbar togglePage={togglePage} pages={pages} />
        <div className="welcomeWidgetContainer-admin">
          <WelcomeWidget />
        </div>
        <div className="widgetsContainer-admin">
          <Widget type="PendAccount" />
          <Widget type="ActiveAccount" />
          <Widget type="ActiveCentra" />
        </div>
        <div className="chartsAndNotificationContainer-admin">
          <div className="chartAndNotificationWrapper-admin">
            <div className="chartWrapper-admin">
              <Chart />
            </div>
            <div className="notificationWrapper-admin">
              <NotificationWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
