import useTogglePages from "../PageHandler/useTogglePages.jsx"

// import Storage from "../Storage/Storage.jsx"
// import Notifications from "../Notifications/Notifications.jsx"
import Dashboard from "../Home/DashboardManager.jsx"
import Settings from "../Settings/SettingsManager.jsx"
import Profile from "../Profile/ProfileManager.jsx"
import Shipments from "../Shipments/Shipments.jsx"
import Shipping from "../../ShippingComp/Shipping/Shipping.jsx"
import ShipmentMain from "../ShipmentMainPage/ShipmentMain.jsx"
import Centra from "../Centra/CentraManager.jsx"
import Storage from "../Storage/storageManagerPage.jsx"
import Notification from "../Notifications/NotificationsManager.jsx"

export const pageLogic = [
  [true, false, false], // dashboard, profile, notif
  [false, false, false], // settings, shipments
  [false, false, false]
]

function ManagerPage() {

  const [pages, togglePage] = useTogglePages(pageLogic);

  return (
            <div>
                {pages[0][0] && <Dashboard togglePage={togglePage} pages={pages}/>}
                {pages[0][1] && <Profile togglePage={togglePage} pages={pages} />}
                {pages[0][2] && <Notification togglePage={togglePage} pages={pages}/>}
                {pages[1][0] && <Settings togglePage={togglePage} pages={pages}/>}
                {pages[1][1] && <Shipments togglePage={togglePage} pages={pages}/>}
                {pages[1][2] && <Storage togglePage={togglePage} pages={pages}/>}
                {pages[2][0] && <Shipping togglePage={togglePage} pages={pages}/>}
                {pages[2][1] && <ShipmentMain togglePage={togglePage} pages={pages}/>}
                {pages[2][2] && <Centra togglePage={togglePage} pages={pages}/>}
            </div>
  )
}

export default ManagerPage
