// eslint-disable-next-line react/prop-types
function HomeIcon({NavigationState, setNavigationState}) {
    var ImagePath = "src/Harbour/assets/history.svg"
    var TextColor = "#3C9284"
    var BarSize = "0px"
    
    if (NavigationState[0] == true) {
      ImagePath = "src/Harbour/assets/history-pressed.svg"
      TextColor = "#04315B"
      BarSize = "50px"
    } else {
      ImagePath = "src/Harbour/assets/history.svg"
      TextColor = "#3C9284"
      BarSize = "0px"
    }
    return (
      <div>
        <div className="CentraManagerBar" style={{width: BarSize}}></div>
        <div className="HomeIconMainContainer" onClick={() => setNavigationState([true, false, false])}>
            <div className="imageContainer">
              <img src={ImagePath}></img>
            </div>
            <div style={{color: TextColor}} className="CentraManagerNavigationText">History</div>
        </div>
      </div>
    )
  }
  
  export default HomeIcon