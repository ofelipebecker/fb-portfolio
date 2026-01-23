import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

import headerTranslations from '../data/translations/header.json';

import logoSmallScreen from "../assets/images/logo-horizontal-orange-en.svg";
import logoLargeScreen from "../assets/images/logo-vertical-orange-en.svg";
import purpleArrow from "../assets/images/purple-arrow-home.png";

const Header = () => {
    const { language, setLanguage } = useLanguage();
    const isLanguagePT = language === "pt";

    const data = headerTranslations[language];

    const location = useLocation();
    const pathname = location.pathname;

    const isHomePage = pathname === "/";
    const isWorkPage = pathname.startsWith("/work");

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-purple p-0">
                <div className="container-fluid justify-content-start">
                    <button
                        className="navbar-toggler btn-outline-orange max-h-50px"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvas-navbar"
                        aria-controls="offcanvas-navbar"
                        aria-label="Toggle navigation"
                    >
                        <span className="bi bi-list fs-1"></span>
                    </button>
                    <Link
                        to="/"
                        className="navbar-brand py-2"
                    >
                        <img
                            src={logoSmallScreen}
                            className="d-lg-none ms-3 max-h-40px"
                            alt="logo"
                        />
                        <img
                            src={logoLargeScreen}
                            className="max-h-130px w-auto d-none d-lg-flex"
                            alt="logo"
                        />
                    </Link>
                    <div 
                        className="offcanvas offcanvas-start bg-purple" 
                        tabindex="-1" 
                        id="offcanvas-navbar" 
                        aria-labelledby="offcanvas-navbar-label"
                    >
                        <div className="offcanvas-header p-4 align-items-start">
                            <h5 className="offcanvas-title" id="offcanvas-navbar-label">
                                <img
                                    src={logoSmallScreen}
                                    className="d-lg-none max-h-50px"
                                    alt="logo"
                                />
                            </h5>
                            <button
                                type="button"
                                className="btn-close btn-close-white fs-3"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            >
                            </button>
                        </div>
                        <div className="offcanvas-body p-4">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link
                                        to="/"
                                        className={
                                            `nav-link ${!isWorkPage ? "active" : ""}`
                                        }
                                    >
                                        {data.nav.about}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/work"
                                        className={
                                            `nav-link ${isWorkPage ? "active" : ""}`
                                        }
                                    >
                                        {data.nav.work}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
