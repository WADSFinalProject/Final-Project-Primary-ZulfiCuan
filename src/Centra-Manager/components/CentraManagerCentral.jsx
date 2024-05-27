import { useState } from "react"
import CentraManagerHeader from "./CentraManagerHeader"
import CentraManagerNavigation from "./CentraManagerNavigation"
import CentraManagerDashboard from "./BodyComponents/CentraManagerDashboard"
import CentraManagerProductionMain from "./BodyComponents/CentraManagerProductionMain"
import CentraManagerShippingMain from "./BodyComponents/CentraManagerShippingMain"
import CentraManagerProfileMain from "./BodyComponents/CentraManagerProfileMain"

// eslint-disable-next-line react/prop-types
function CentraManagerCentral() {
   // eslint-disable-next-line no-unused-vars
  const [NavigationSlot, setNavigationSlot] = useState([true, false, false, false, false]);
  // eslint-disable-next-line no-unused-vars
  var HeaderLabel = 'Home'
  var currentPosition  = <CentraManagerDashboard />

  if (NavigationSlot[0] == true) {
    HeaderLabel = 'Home'
    currentPosition  = <CentraManagerDashboard />
  } else if (NavigationSlot[1] == true) {
    HeaderLabel = 'Production'
    currentPosition  = <CentraManagerProductionMain />
  } else if (NavigationSlot[2] == true) {
    HeaderLabel = 'QR'
    currentPosition = <CentraManagerProductionMain />
  } else if (NavigationSlot[3] == true) {
    HeaderLabel = 'Shipping'
    currentPosition = <CentraManagerShippingMain />
  } else if (NavigationSlot[4] == true) {
    HeaderLabel = 'Profile'
    currentPosition = <CentraManagerProfileMain />
  }
  // eslint-disable-next-line no-unused-vars
  return (
    <div>
        <div className="HeaderCentraManager">
          <CentraManagerHeader Label={HeaderLabel}/>
        </div>
        <div className="BodyCentraManager">{currentPosition}</div>
        <div className="NavigationCentraManager">
          <CentraManagerNavigation setNavigationSlot={setNavigationSlot} NavigationSlot={NavigationSlot} />
        </div>
    </div>
  )
}

export default CentraManagerCentral