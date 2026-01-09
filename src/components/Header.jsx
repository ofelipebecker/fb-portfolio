import logoVertical from "../assets/images/logo-vertical-orange-ptbr.svg";
import logoHorizontal from "../assets/images/logo-horizontal-orange-ptbr.svg";
import purpleArrow from "../assets/images/purple-arrow-home.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const pathname = location.pathname;

    const isWorkPage = pathname.startsWith("/work");

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light d-flex flex-column p-0">
                <div className="container-fluid bg-purple shadow-sm">
                    <div className="d-flex align-items-center">
                        <button
                            className="navbar-toggler btn-outline-orange max-h-50px"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbar-toggler-btn"
                            aria-controls="navbar-toggler-btn"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="bi bi-list fs-1"></span>
                        </button>
                        <div className="py-2">
                            <img
                                src={logoHorizontal}
                                className="d-lg-none ms-3 max-h-40px"
                                alt="logo"
                            />
                        </div>
                    </div>
                    <div
                        className="collapse navbar-collapse"
                        id="navbar-toggler-btn"
                    >
                        <div className="d-flex flex-column w-100">
                            <div className="row d-none d-lg-flex">
                                <div className="col-12 my-5 text-center">
                                    <img
                                        src={logoVertical}
                                        className="max-h-130px w-auto"
                                        alt="logo"
                                    />
                                    <ul className="list-unstyled fst-italic mt-4 text-orange">
                                                                                <li>Palhoça, SC - Brasil</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <ul className="nav justify-content-center mb-3 mb-lg-5">
                                        <li className="nav-item">
                                            <Link
                                                to="/"
                                                className={
                                                    `nav-link ${!isWorkPage ? "active" : ""}`
                                                }
                                            >
                                                Sobre
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                to="/work"
                                                className={
                                                    `nav-link ${isWorkPage ? "active" : ""}`
                                                }
                                            >
                                                Projetos
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-none d-lg-flex justify-content-center">
                    <img
                        src={purpleArrow}
                        className="w-auto"
                        alt="purple-arrow"
                    />
                </div>
            </nav>
        </header>
    );
};

export default Header;
