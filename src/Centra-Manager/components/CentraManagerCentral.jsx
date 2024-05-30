import { useState } from "react"
import '../css/CentraManager.css'
import CentraManagerHeader from "./CentraManagerHeader"
import CentraManagerNavigation from "./CentraManagerNavigation"
import CentraManagerDashboard from "./BodyComponents/CentraManagerDashboard"
import CentraManagerProductionMain from "./BodyComponents/CentraManagerProductionMain"
import CentraManagerShippingMain from "./BodyComponents/CentraManagerShippingMain"
import CentraManagerProfileMain from "./BodyComponents/CentraManagerProfileMain"

// eslint-disable-next-line react/prop-types
function CentraManagerCentral() {
   // eslint-disable-next-line no-unused-vars
  const [NavigationSlot, setNavigationSlot] = useState([[true], [false, false, false, false], [false], [false], [false]]);

  var HeaderLabel = 'Home'
  var currentPosition  = <CentraManagerDashboard />

  if (NavigationSlot[0][0] == true) {
    HeaderLabel = 'Home'
    currentPosition  = <CentraManagerDashboard />
  } else if (NavigationSlot[1][0] == true) {
    HeaderLabel = 'Production'
    currentPosition  = <CentraManagerProductionMain setProductionPosition={setNavigationSlot} ProductionPosition={NavigationSlot} />
  } else if (NavigationSlot[2][0] == true) {
    HeaderLabel = 'QR'
    currentPosition = <CentraManagerProductionMain />
  } else if (NavigationSlot[3][0] == true) {
    HeaderLabel = 'Shipping'
    currentPosition = <CentraManagerShippingMain />
  } else if (NavigationSlot[4][0] == true) {
    HeaderLabel = 'Profile'
    currentPosition = <CentraManagerProfileMain />
  } else if (NavigationSlot[1][1] == true) {
    HeaderLabel = 'Wet Leaves'
    currentPosition  = <CentraManagerProductionMain setProductionPosition={setNavigationSlot} ProductionPosition={NavigationSlot} />
  } else if (NavigationSlot[1][2] == true) {
    HeaderLabel = 'Dry Leaves'
    currentPosition  = <CentraManagerProductionMain setProductionPosition={setNavigationSlot} ProductionPosition={NavigationSlot} />
  } else if (NavigationSlot[1][3] == true) {
    HeaderLabel = 'Flour'
    currentPosition  = <CentraManagerProductionMain setProductionPosition={setNavigationSlot} ProductionPosition={NavigationSlot} />
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