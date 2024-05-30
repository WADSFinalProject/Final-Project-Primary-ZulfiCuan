import { useState } from "react"
import HarbourHeader from "./HarbourHeader"
import HarbourNavigation from "./HarbourNavigation"
import HarbourDashboard from "./BodyComponents/HarbourDashboard"
import HarbourProfileMain from "./BodyComponents/HarbourProfileMain"
import HarbourQRMain from "./HarbourQRMain"

// eslint-disable-next-line react/prop-types
function HarbourCentral() {
   // eslint-disable-next-line no-unused-vars
  const [NavigationSlot, setNavigationSlot] = useState([true, false, false]);
  // eslint-disable-next-line no-unused-vars
  var HeaderLabel = 'Home'
  var currentPosition  = <HarbourDashboard />

  if (NavigationSlot[0] == true) {
    HeaderLabel = 'Home'
    currentPosition  = <HarbourDashboard />
  } else if (NavigationSlot[1] == true) {
    HeaderLabel = 'QR'
    currentPosition = <HarbourQRMain />
  } else if (NavigationSlot[2] == true) {
    HeaderLabel = 'Profile'
    currentPosition = <HarbourProfileMain />
  }
  // eslint-disable-next-line no-unused-vars
  return (
    <div>
        <div className="HeaderCentraManager">
          <HarbourHeader Label={HeaderLabel}/>
        </div>
        <div className="BodyCentraManager">{currentPosition}</div>
        <div className="NavigationCentraManager">
          <HarbourNavigation setNavigationSlot={setNavigationSlot} NavigationSlot={NavigationSlot} />
        </div>
    </div>
  )
}

export default HarbourCentral