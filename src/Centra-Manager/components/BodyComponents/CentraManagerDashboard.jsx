import DashBoardBarChart from "../Charts/DashBoardBarChart"
import "../../css/CentraManagerBody.css"
import PieChartDashboard from "../Charts/PieChartDashboard"
import ShippingDashboard from "./ShippingDashboard"

// eslint-disable-next-line react/prop-types
function CentraManagerDashboard() {
    const testTable = [1, 2, 3]
  return (
    <div>
        <div className="CentraManagerDashboardTopWrapper">
            <div className="TotalChartTextTitleDashboard">Total Amount Summary</div>
            <DashBoardBarChart />
            <div className="PieChartHandlerDashboard">
                <PieChartDashboard dataPie={[75, 25]}/>
                <PieChartDashboard dataPie={[84, 16]}/>
            </div>
        </div>
        <div className="GapSetterCentraManagerDashboard">
            <div className="ShippingTitleHeaderCentraManager">
                <div className="TitleRecentShipping">Recent Shipping</div>
                <div className="ViewMoreRecentShipping">
                    <div className="ViewMoreRecentShippingText">View more</div>
                    <img className="ArrowRecentShipping" src="src\Centra-Manager\assets\arrow.svg"></img>
                </div>
            </div>
            <div>
                {testTable.map((testTable, index) => (
                    <div key={index}><ShippingDashboard /></div>
                ))}
            </div>
        </div>
        <div style={{height: "150px"}}></div>
    </div>
  )
}

export default CentraManagerDashboard