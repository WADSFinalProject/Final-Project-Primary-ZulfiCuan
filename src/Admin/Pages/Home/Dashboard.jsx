import './Dashboard.scss';
import SideBar from '../../Components/sidebar/SideBar.jsx';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import Widget from '../../Components/widget/Widget.jsx';
import WelcomeWidget from '../../Components/widget/Welcomewidget.jsx';
import Featured from '../../Components/featured/Featured.jsx';
import Chart from '../../Components/charts/LineChart.jsx';
import NotificationWidget from '../../Components/widget/NotificationWidget.jsx'

function Dashboard() {
  return (
    <div className="dashboardPage">
      <SideBar />
      <div className="dashboardContent">
        <Navbar />
        <div className="welcomeWidgetContainer">
          <WelcomeWidget />
        </div>
        <div className="widgetsContainer">
          <Widget type="PendAccount" />
          <Widget type="ActiveAccount" />
          <Widget type="ActiveCentra" />
        </div>
        <div className="chartsAndNotificationContainer"> {/* New container for charts and notifications */}
          <div className="chartAndNotificationWrapper">
            <div className="chartWrapper">
              <Chart />
            </div>
            <div className="notificationWrapper">
              <NotificationWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;