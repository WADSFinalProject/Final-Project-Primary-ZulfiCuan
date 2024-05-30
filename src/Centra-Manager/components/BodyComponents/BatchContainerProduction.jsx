import '../../css/ProductionCentraManager.css'
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
function BatchContainerProduction({data , setDeleteUpdate}) {
  var styleStatus = {
    border: "1px solid #2D756A",
    background: "#BEDED9",
    color: "#2D756A"
  }
  if (data.status == "Usable") {
    styleStatus = {
      border: "1px solid #2D756A",
      background: "#BEDED9",
      color: "#2D756A"
    }
  } else if (data.status == "Expired") {
    styleStatus = {
      border: "1px solid #973C30",
      background: "#FFBDB4",
      color: "#973C30"
    }
  } else {
    styleStatus = {
      border: "1px solid #2D756A",
      background: "transparent",
      color: "#2D756A"
    }
  }

  return (
    <div className='BatchProductionContainerContainer'>
      <div>
        <div className='BatchProductionContainerTopText'>
          <div>{data.ID}</div>
          <div>|</div>
          <div>{data.SecondSlot}</div>
          <div className='BatchProductionContainerDateText'>{data.date}</div>
        </div>
        <div className='BatchProductionContainerTopTextTwo'>
          <div>weight</div>
          <div>:</div>
          <div className='BatchProductionContainerTopWeightText'>{data.Weight}</div>
          <div className='BatchProductionContainerStatusText'><span className='BatchProductionContainerStatusTextIn' style={styleStatus}>{data.status}</span></div>
        </div>
      </div>
      <div className='BatchProductionCotainerBottomText'>
        <div className='BatchProductionContainerBottomTextEdit'>
          <div className='BatchProductionContainerDeleteButton' onClick={() => setDeleteUpdate(true)}>
            <div style={{margin: "auto"}} >Delete</div>
            <img src='src\Centra-Manager\assets\DeleteIcon.svg' style={{margin: "auto"}}></img>
          </div>
          <div className='BatchProductionContainerEditButton'>
            <div style={{margin: "auto"}}>Input</div>
            <img src='src\Centra-Manager\assets\PencilIcon.svg' style={{margin: "auto"}}></img>
          </div>
        </div>
      </div>
    </div>
  )
}

BatchContainerProduction.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.checkPropTypes()
  )
}

export default BatchContainerProduction