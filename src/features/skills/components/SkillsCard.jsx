import RadarChart from "../components/RadarChart";

import ChartJSLogo from "../../../assets/images/chartjs-logo.svg";

const SkillsCard = ({ title, chartData }) => {
    return (
        <div className="col-12 col-lg-6">
            <div className="card border-0 h-100 rounded-3 shadow-sm">
                <h2 className="mt-3 mb-0">{title}</h2>
                <div className="card-body">
                    <RadarChart chartData={chartData} />
                    <div className="d-flex align-items-center mt-3">
                        <img
                            className="w-25px"
                            src={ChartJSLogo}
                            alt="..."
                        ></img>
                        <span className="text-orange">Chart.JS</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsCard;
