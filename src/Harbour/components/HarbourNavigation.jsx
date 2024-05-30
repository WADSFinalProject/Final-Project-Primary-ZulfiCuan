import ProfileIcon from "./NavigationIcons/ProfileIcon"
import QrCodeIcon from "./NavigationIcons/QrCodeIcon"
import HistoryIcon from "./NavigationIcons/HistoryIcon"
import { useSpring, animated } from '@react-spring/web'

// eslint-disable-next-line react/prop-types
function HarbourNavigation({NavigationSlot, setNavigationSlot}) {
    const springs = useSpring({
      config: {
        tension: 150, 
        friction: 60
      },
      from: { y: 100 },
      to: { y: 0 },
    })
    return (
      <animated.div className="NavigationCentraManagerPrimary" style={{...springs}}>
        <div><QrCodeIcon NavigationState={NavigationSlot} setNavigationState={setNavigationSlot}/></div>
        <div className="NavigationManagerContainer">
            <div><HistoryIcon NavigationState={NavigationSlot} setNavigationState={setNavigationSlot}/></div>
            <div></div>
            <div><ProfileIcon NavigationState={NavigationSlot} setNavigationState={setNavigationSlot}/></div>
        </div>
      </animated.div>
    )
  }
  
  export default HarbourNavigation