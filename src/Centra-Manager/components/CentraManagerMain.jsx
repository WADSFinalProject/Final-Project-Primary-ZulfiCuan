import UseWindowThreshold from "../../UseWindowThreshold"
import CentraManagerCentral from "./CentraManagerCentral"
import DesktopPlaceholder from "./DesktopPlaceholder"
import '../css/CentraManager.css'
import { useEffect } from "react"

// eslint-disable-next-line react/prop-types
function CentraManagerMain() {
    const MAX_MOBILE_WIDTH = 600
    const isMobileSize = UseWindowThreshold(MAX_MOBILE_WIDTH)

    useEffect(() => {
        //Some more code to execute when the mobile size is toggled
    }, [isMobileSize])

  return (
    <>
      { isMobileSize ? <CentraManagerCentral /> : <DesktopPlaceholder /> }
    </>
  )
}

export default CentraManagerMain