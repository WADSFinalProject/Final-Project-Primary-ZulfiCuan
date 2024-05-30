// eslint-disable-next-line react/prop-types
function QrCodeIcon() {
    return (
      <div className="QrCodeIconMainContainer" onClick={() => setNavigationState([false, true, false])}>
          <img src="src/Harbour/assets/qrcodecontainer.svg" className="QrCodeItems"></img>
          <img src="src/Harbour/assets/qrcodeouter.svg" className="QrCodeItems"></img>
          <img src="src/Harbour/assets/qrcodeinner.svg" className="QrCodeItems"></img>
      </div>
    )
  }
  
  export default QrCodeIcon