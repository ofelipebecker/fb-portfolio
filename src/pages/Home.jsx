import CityMap from "../components/CityMap";
import CourseTable from "../components/CourseTable";
import RadarChart from "../components/RadarChart";

import ChartJSLogo from "../assets/images/chartjs-logo.svg";

const Home = () => {
    return (
        <div className="container mt-5 text-center">
            <h1 className="mb-5">Sobre</h1>
            <div className="row g-5">
                <div className="col-md-5 offset-md-1">
                    <div className="card border-0 h-100 rounded-3 shadow-sm">
                        <h2 className="mt-3 mb-0">Habilidades</h2>
                        <div className="card-body">
                            <RadarChart />
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
                <div className="col-md-5">
                    <div className="card border-0 h-100 rounded-3 shadow-sm">
                        <h2 className="mt-3 mb-0">Educação</h2>
                        <div className="card-body d-flex flex-column">
                            <CourseTable />
                            <div className="d-flex align-items-center mt-3 text-bs-purple mt-auto">
                                <span className="bi bi-bootstrap-fill fs-2 me-2"></span>
                                <span>Bootstrap 5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-10 offset-md-1 mt-5">
                    <div className="card border-0 rounded-3 shadow-sm">
                        <h2 className="mt-3 mb-0">Onde está Felipe?</h2>
                        <div className="card-body">
                            <CityMap />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-5"></div>
            <div className="row my-5"></div>
        </div>
    );
};

export default Home;
