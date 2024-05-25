import { useState } from "react"
import HomeIcon from "./NavigationIcons/HomeIcon"
import ProductionIcon from "./NavigationIcons/ProductionIcon"
import ProfileIcon from "./NavigationIcons/ProfileIcon"
import QrCodeIcon from "./NavigationIcons/QrCodeIcon"
import ShippingIcon from "./NavigationIcons/ShippingIcon"

// eslint-disable-next-line react/prop-types
function CentraManagerNavigation() {
    const [NavigationSlot, setNavigationSlot] = useState([false, false, true, false, false]);

    return (
      <div className="NavigationManagerContainer">
          <div><HomeIcon NavigationState={NavigationSlot} setNavigationState={setNavigationSlot}/></div>
          <div><ProductionIcon /></div>
          <div><QrCodeIcon /></div>
          <div><ShippingIcon /></div>
          <div><ProfileIcon /></div>
      </div>
    )
  }
  
  export default CentraManagerNavigation