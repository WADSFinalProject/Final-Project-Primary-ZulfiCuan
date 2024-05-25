import CentraManagerHeader from "./CentraManagerHeader"
import CentraManagerNavigation from "./CentraManagerNavigation"

// eslint-disable-next-line react/prop-types
function CentraManagerCentral() {
  return (
    <div>
        <div className="HeaderCentraManager">
          <CentraManagerHeader />
        </div>
        <div className="Body">Body</div>
        <div className="NavigationCentraManager">
          <CentraManagerNavigation />
        </div>
    </div>
  )
}

export default CentraManagerCentral