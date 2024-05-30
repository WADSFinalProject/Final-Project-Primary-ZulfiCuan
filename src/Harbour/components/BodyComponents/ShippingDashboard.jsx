import "../../css/HarbourBody.css"

// eslint-disable-next-line react/prop-types
function ShippingDashboard() {
    const color = {
        color: "#2D756A",
        backgroundColor: "#BEDED9",
        borderColor: "#2D756A"
    }
  return (
    <div className="PrimaryShippingDashboardContainer">
        <div className="TitleTextShippingDashboardContainer">
            <div className="TitleTextShippingDashboard">Shipping ID : <span className="TitleTextShippingDashboardExtra">1239 8628 2748 29</span></div>
            <div>
                <div className="ShippingDashboardShowStatus" style={color}>Delivered</div>
            </div>
        </div>
        <div className="ShippingDashboardMiniTextContainer">
            <div className="ShippingDashboardMiniText">
                <div className="ShippingDashboardMainText">Provider</div>
                <div className="ShippingDashboardDoubleDotText">:</div>
                <div className="ShippingDashboardAnswerText">Indonesia Military</div>
            </div>
            <div className="ShippingDashboardMiniText">
                <div className="ShippingDashboardMainText">Weight</div>
                <div className="ShippingDashboardDoubleDotText">:</div>
                <div className="ShippingDashboardAnswerText">10 Kg</div>
            </div>
            <div className="ShippingDashboardMiniText">
                <div className="ShippingDashboardMainText">Batch ID</div>
                <div className="ShippingDashboardDoubleDotText">:</div>
                <div className="ShippingDashboardAnswerText">F24, F25</div>
            </div>
            <div className="ShippingDashboardMiniText">
                <div className="ShippingDashboardMainText">Date</div>
                <div className="ShippingDashboardDoubleDotText">:</div>
                <div className="ShippingDashboardAnswerText">05/02/24</div>
            </div>
        </div>
    </div>
  )
}

export default ShippingDashboard