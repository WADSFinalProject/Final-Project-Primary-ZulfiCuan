import HeaderTextSlot from "./HeaderTextSlot"
import NotificationButton from "./NotificationButton"

// eslint-disable-next-line react/prop-types
function HarbourHeader({Label}) {
    return (
      <div className="HeaderManagerContainer">
          <HeaderTextSlot label={Label}/>
          <NotificationButton />
      </div>
    )
  }
  
  export default HarbourHeader