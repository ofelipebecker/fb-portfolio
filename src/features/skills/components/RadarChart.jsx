import { Radar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const RadarChart = ({ chartData }) => {
    const { labels, tooltipLabel } = chartData;

    const data = {
        labels: labels,
        datasets: [
            {
                label: tooltipLabel,
                data: [80, 90, 85, 70, 80],
                backgroundColor: "rgba(255, 147, 30, 0.2)",
                borderColor: "#ff931e",
                pointBackgroundColor: "#ff931e",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "#ff931e",
            },
        ],
    };

    const options = {
        scales: {
            r: {
                min: 0,
                max: 100,
                ticks: {
                    stepSize: 20,
                    backdropColor: "transparent",
                },
                pointLabels: {
                    font: {
                        size: 14,
                    },
                    color: "#6c2250",
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div
            style={{
                width: "100%",
                minHeight: "300px",
                backgroundColor: "#f5eff2",
            }}
        >
            <Radar data={data} options={options} />
        </div>
    );
};

export default RadarChart;
