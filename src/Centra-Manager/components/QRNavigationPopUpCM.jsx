import '../css/CentraManager.css'

// eslint-disable-next-line react/prop-types
function QRNavigationPopUpCM() {
  return (
    <div className='ContainerQRNavigationPopUp'>
      <div className='ContainerQRNavigationPopUpContainer'>
        <div className='ContainerQRNavigationPopupSubText'>Scanning for...</div>
        <div className='QRCodePopUpImageContainer' style={{backgroundImage: 'url(src/Centra-Manager/assets/Shipping.png)', backgroundSize: '390px'}}>Shipping</div>
        <div className='QRCodePopUpImageContainer' style={{backgroundImage: 'url(src/Centra-Manager/assets/WetLeaves.png)', backgroundSize: '390px'}}>Wet Leaves</div>
        <div className='QRCodePopUpImageContainer' style={{backgroundImage: 'url(src/Centra-Manager/assets/DryLeaves.png)', backgroundSize: '390px'}}>Dry Leaves</div>
        <div className='QRCodePopUpImageContainer' style={{backgroundImage: 'url(src/Centra-Manager/assets/Flour.png)', backgroundSize: '390px'}}>Flour</div>
        <div>
          <div></div>
          <div>Or</div>
          <div></div>
        </div>
        <div>
            <img></img>
            <div>Add Manually</div>
        </div>
      </div>
    </div>
  )
}

export default QRNavigationPopUpCM