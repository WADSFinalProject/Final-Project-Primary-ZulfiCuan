import "../css/HeaderManager.css"
import ProfileTextHeader from "./ProfileTextHeader"

// eslint-disable-next-line react/prop-types
function HeaderTextSlot({label}) {
  if (label == 'Home') {
    return (
      <ProfileTextHeader Label={label}/>
    )
  } else {
  return (
    <div className="HeaderTextOtherHarbour">{label}</div>
  )
}
}

export default HeaderTextSlot