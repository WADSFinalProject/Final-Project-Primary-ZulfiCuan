import HeaderTextSlot from "./HeaderTextSlot"

// eslint-disable-next-line react/prop-types
function HarbourHeaderQR({Label}) {
    return (
      <div className="HeaderManagerContainer">
          <HeaderTextSlot label={Label}/>
      </div>
    )
  }
  
  export default HarbourHeaderQR