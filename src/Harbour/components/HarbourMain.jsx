import UseWindowThreshold from "../../UseWindowThreshold"
import HarbourCentral from "./HarbourCentral"
import DesktopPlaceholder from "./DesktopPlaceholder"
import { useEffect } from "react"

// eslint-disable-next-line react/prop-types
function HarbourMain() {
    const MAX_MOBILE_WIDTH = 600
    const isMobileSize = UseWindowThreshold(MAX_MOBILE_WIDTH)

    useEffect(() => {
        //Some more code to execute when the mobile size is toggled
    }, [isMobileSize])

  return (
    <>
      { isMobileSize ? <HarbourCentral /> : <DesktopPlaceholder /> }
    </>
  )
}

export default HarbourMain