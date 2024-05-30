import { CategoryScale, Chart, LinearScale, BarElement, Tooltip } from "chart.js"
import { Bar } from "react-chartjs-2"
import "../../css/CentraManagerChart.css"

// eslint-disable-next-line react/prop-types
function DashBoardBarChart() {
    Chart.register(CategoryScale, LinearScale, BarElement, Tooltip)
    const data = {
        labels: ["Wet", "Dry", "Flour"],
        datasets: [{
            axis: "y",
            label: "My First dataset",
            backgroundColor: "#3C9284",
            borderColor: "rgb(255, 99, 132)",
            borderRadius: 8,
            data: [60, 40, 50],
    }]};
    const option = {
        reposive: true,
        indexAxis: "y",
    }
  return (
    <div className="BarChartDashboardContainer">
        <Bar
            options={option}
            data={data}
        />
    </div>
  )
}

export default DashBoardBarChart