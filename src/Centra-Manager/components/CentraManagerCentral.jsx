import { useState } from "react"
import '../css/CentraManager.css'
import CentraManagerHeader from "./CentraManagerHeader"
import CentraManagerNavigation from "./CentraManagerNavigation"
import CentraManagerDashboard from "./BodyComponents/CentraManagerDashboard"
import CentraManagerProductionMain from "./BodyComponents/CentraManagerProductionMain"
import CentraManagerShippingMain from "./BodyComponents/CentraManagerShippingMain"
import CentraManagerProfileMain from "./BodyComponents/CentraManagerProfileMain"
import { useSpring, animated } from '@react-spring/web'
import CentraManagerHeaderBackButton from "./CentraManagerHeaderBackButton"
import CentraManagerNotificationPageCentral from "./CentraManagerNotificationPageCentral"
import CentraManagerAddNewWet from "./EditAndNewComponent/CentraManagerAddNewWet"
import CentraManagerAddNewDry from "./EditAndNewComponent/CentraManagerAddNewDry"
import CentraManagerAddFlour from "./EditAndNewComponent/CentraManagerAddFlour"
import QRNavigationPopUpCM from "./QRNavigationPopUpCM"

var PreviousSlot = 
[[true, false], 
[false, false, false, false, false, false, false, false, false, false], 
[false, false, false, false, false], 
[false, false, false], 
[false, false, false]];

// eslint-disable-next-line react/prop-types
function CentraManagerCentral() {
   // eslint-disable-next-line no-unused-vars
  const [NavigationSlot, setNavigationSlot] = useState(
    [[true, false], 
    [false, false, false, false, false, false, false, false, false, false], 
    [false, false, false, false, false], 
    [false, false, false], 
    [false, false, false]]);
    
    const [springs, api] = useSpring(() => ({
      config: {
        tension: 150, 
        friction: 60
      },
      from: { y: 0 },
    })) 
    
    const [QRCode, QRCodeAnimation] = useSpring(() => ({
      from: { y: 0, x: 0},
      to: { y: 0, x: 0 },
    }))

    function QRCodeOpen() {
        QRCodeAnimation.start({to: {y: -600}})
    }

  var HeaderLabel = 'Home'
  var currentPosition  = <CentraManagerDashboard />
  var headerPosition = <CentraManagerHeader Label={HeaderLabel} setNavigation={setNavigationSlot}/>

  if (NavigationSlot[0][0] == true) {
    HeaderLabel = 'Home'
    currentPosition  = <CentraManagerDashboard />
    headerPosition = <CentraManagerHeader Label={HeaderLabel} setNavigation={setNavigationSlot}/>
    PreviousSlot = 
      [[true, false], 
      [false, false, false, false, false, false, false, false, false, false], 
      [false, false, false, false, false], 
      [false, false, false], 
      [false, false, false]];
      api.start({to: {y: 0,},})
  } else if (NavigationSlot[1][0] == true) {
    HeaderLabel = 'Production'
    currentPosition  = <CentraManagerProductionMain setProductionPosition={setNavigationSlot} ProductionPosition={NavigationSlot} />
    headerPosition = <CentraManagerHeader Label={HeaderLabel} setNavigation={setNavigationSlot}/>
    PreviousSlot = 
      [[false, false], 
      [true, false, false, false, false, false, false, false, false, false], 
      [false, false, false, false, false], 
      [false, false, false], 
      [false, false, false]];
      api.start({to: {y: 0,},})
  } else if (NavigationSlot[3][0] == true) {
    HeaderLabel = 'Shipping'
    currentPosition = <CentraManagerShippingMain />
    headerPosition = <CentraManagerHeader Label={HeaderLabel} setNavigation={setNavigationSlot}/>
    PreviousSlot = 
      [[false, false], 
      [false, false, false, false, false, false, false, false, false, false], 
      [false, false, false, false, false], 
      [true, false, false], 
      [false, false, false]]
      api.start({to: {y: 0,},})
  } else if (NavigationSlot[4][0] == true) {
    HeaderLabel = 'Profile'
    currentPosition = <CentraManagerProfileMain />
    headerPosition = <CentraManagerHeader Label={HeaderLabel} setNavigation={setNavigationSlot}/>
    PreviousSlot = 
      [[false, false], 
      [false, false, false, false, false, false, false, false, false, false], 
      [false, false, false, false, false], 
      [false, false, false], 
      [true, false, false]];
      api.start({to: {y: 0,},})
  } else if (NavigationSlot[1][1] == true) {
    HeaderLabel = 'Wet Leaves'
    currentPosition  = <CentraManagerProductionMain setProductionPosition={setNavigationSlot} ProductionPosition={NavigationSlot} />
    headerPosition = <CentraManagerHeader Label={HeaderLabel} setNavigation={setNavigationSlot}/>
    PreviousSlot = 
      [[false, false], 
      [false, true, false, false, false, false, false, false, false, false], 
      [false, false, false, false, false], 
      [false, false, false], 
      [false, false, false]];
    api.start({to: {y: 0,},})
  } else if (NavigationSlot[1][2] == true) {
    HeaderLabel = 'Dry Leaves'
    currentPosition  = <CentraManagerProductionMain setProductionPosition={setNavigationSlot} ProductionPosition={NavigationSlot} />
    headerPosition = <CentraManagerHeader Label={HeaderLabel} setNavigation={setNavigationSlot}/>
    PreviousSlot = 
      [[false, false], 
      [false, false, true, false, false, false, false, false, false, false], 
      [false, false, false, false, false], 
      [false, false, false], 
      [false, false, false]];
      api.start({to: {y: 0,},})
  } else if (NavigationSlot[1][3] == true) {
    HeaderLabel = 'Flour'
    currentPosition  = <CentraManagerProductionMain setProductionPosition={setNavigationSlot} ProductionPosition={NavigationSlot} />
    headerPosition = <CentraManagerHeader Label={HeaderLabel} setNavigation={setNavigationSlot}/>
    PreviousSlot = 
      [[false, false], 
      [false, false, false, true, false, false, false, false, false, false], 
      [false, false, false, false, false], 
      [false, false, false], 
      [false, false, false]];
      api.start({to: {y: 0,},})
  } else if (NavigationSlot[0][1] == true) {
    HeaderLabel = 'Notification'
    currentPosition = <CentraManagerNotificationPageCentral setNavigation={setNavigationSlot}/>
    headerPosition = <CentraManagerHeaderBackButton label={HeaderLabel} setNavigation={setNavigationSlot} previousState={PreviousSlot} size={"24px"}/>
    api.start({to: {y: 200,},})
  } else if (NavigationSlot[1][4] == true) {
    HeaderLabel = 'Add New - Wet Leaves'
    currentPosition = <CentraManagerAddNewWet setNavigation={setNavigationSlot} previousState={PreviousSlot}/>
    headerPosition = <CentraManagerHeaderBackButton label={HeaderLabel} setNavigation={setNavigationSlot} previousState={PreviousSlot} size={"20px"} />
    api.start({to: {y: 200,},})
  } else if (NavigationSlot[1][5] == true) {
    HeaderLabel = 'Add New - Dry Leaves'
    currentPosition = <CentraManagerAddNewDry setNavigation={setNavigationSlot} previousState={PreviousSlot}/>
    headerPosition = <CentraManagerHeaderBackButton label={HeaderLabel} setNavigation={setNavigationSlot} previousState={PreviousSlot} size={"20px"}/>
    api.start({to: {y: 200,},})
  } else if (NavigationSlot[1][6] == true) {
    HeaderLabel = 'Add New - Flour'
    currentPosition = <CentraManagerAddFlour setNavigation={setNavigationSlot} previousState={PreviousSlot}/>
    headerPosition = <CentraManagerHeaderBackButton label={HeaderLabel} setNavigation={setNavigationSlot} previousState={PreviousSlot} size={"20px"}/>
    api.start({to: {y: 200,},})
  }
  return (
    <div>
        <div className="HeaderCentraManager">
          {headerPosition}
        </div>
        <div className="BodyCentraManager">{currentPosition}</div>
        <animated.div className="NavigationCentraManager" style={{...springs}}>
          <CentraManagerNavigation setNavigationSlot={setNavigationSlot} NavigationSlot={NavigationSlot} setQRCode={QRCodeOpen}/>
        </animated.div>
        <animated.div className='CentraManagerQRCodePopUpPage' style={{...QRCode}}>
          <QRNavigationPopUpCM />
        </animated.div>
    </div>
  )
}

export default CentraManagerCentral