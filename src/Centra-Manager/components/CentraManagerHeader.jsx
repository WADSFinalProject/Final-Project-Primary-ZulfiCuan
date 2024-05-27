import HeaderTextSlot from "./HeaderTextSlot"
import NotificationButton from "./NotificationButton"

// eslint-disable-next-line react/prop-types
function CentraManagerHeader({Label}) {
    return (
      <div className="HeaderManagerContainer">
          <HeaderTextSlot label={Label}/>
          <NotificationButton />
      </div>
    )
  }
  
  export default CentraManagerHeader