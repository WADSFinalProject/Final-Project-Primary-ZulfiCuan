import "../../css/Harbour.css"
import PackageFilter from "./PackageFilter"
import PackageList from "./PackageList"

// eslint-disable-next-line react/prop-types
function HarbourDashboard() {
    const testTable = [1]
  return (
    <div>
        
        <div className="GapSetterCentraManagerDashboard">
            <div className="ShippingTitleHeaderCentraManager">
                <div className="TitleRecentShipping">Scanning History</div>
                <div className="ViewMoreRecentShipping">
                    <div className="ViewMoreRecentShippingText">View more</div>
                    <img className="ArrowRecentShipping" src="src\Harbour\assets\arrow.svg"></img>
                </div>
            </div>
            <PackageFilter />
            <div>
                {testTable.map((testTable, index) => (
                    <div key={index}><PackageList /></div>
                ))}
            </div>
        </div>
        <div style={{height: "150px"}}></div>
    </div>
  )
}

export default HarbourDashboard