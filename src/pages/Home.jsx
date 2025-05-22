import CityMap from "../components/CityMap";
import EducationCard from "../components/EducationCard";
import SkillsCard from "../components/SkillsCard";

import ReactLogo from "../assets/images/react-logo.svg";

const Home = () => {
    return (
        <>
            <div className="container mt-5 text-center">
                <h1 className="mb-5">Sobre</h1>
                <div className="row g-5">
                    <SkillsCard />
                    <EducationCard />
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
            <footer class="footer mt-auto py-3 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="d-flex align-items-center text-purple">
                                <span>
                                    Felipe Becker | Desenvolvedor Front-end |
                                    2025
                                </span>
                                <span className="mx-3">-</span>
                                <span className="me-2">Feito com</span>
                                <img
                                    className="w-25px"
                                    src={ReactLogo}
                                    alt="..."
                                ></img>
                                <span className="text-react-blue fs-3 fw-semibold ms-2">
                                    React
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Home;
