import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import useMediaQuery from "../hooks/useMediaQuery";

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

    const isLargeScreen = useMediaQuery('(min-width: 992px)'); 
    const isSmallScreen = !isLargeScreen; 

    return (
        <header>
            {isSmallScreen && (
                <nav className="navbar p-0">
                    <div className="container-fluid justify-content-start bg-purple shadow-sm">
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
                                className="ms-3 max-h-40px"
                                alt="logo"
                            />
                        </Link>
                        <div className="dropdown ms-auto">
                            <button 
                                className="btn dropdown-toggle btn-outline-orange border-0" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                <span className="bi bi-translate fs-2"></span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end border-0 mt-3 shadow-sm p-0">
                                <li>
                                    <button 
                                        className="dropdown-item text-purple p-3" 
                                        type="button"
                                        onClick={() => setLanguage('pt')}
                                    >
                                        Português
                                        {isLanguagePT && (' ✓')}
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        className="dropdown-item text-purple p-3" 
                                        onClick={() => setLanguage('en')}
                                    >   
                                        English
                                        {!isLanguagePT && (' ✓')}
                                    </button>
                                </li>
                            </ul>
                        </div>
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
                                        className="max-h-50px"
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
                                <ul className="navbar-nav">
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
            )}
            {isLargeScreen && (
                <nav className="navbar p-0">
                    <div className="container-fluid bg-purple flex-column shadow-sm">
                        <div className="row w-100">
                            <div className="col-lg-10 offset-lg-1 mt-1">
                                <div className="text-nowrap w-100 text-end">
                                    <button 
                                        className="btn btn-lg text-light"
                                        onClick={() => setLanguage('pt')}
                                    >   
                                        {isLanguagePT && ('✓ ')}
                                        Português
                                    </button>
                                    <span className="text-light">|</span>
                                    <button 
                                        className="btn btn-lg text-light"
                                        onClick={() => setLanguage('en')}
                                    >   
                                        {!isLanguagePT && ('✓ ')}
                                        English
                                    </button>
                                </div>
                            </div>
                        </div>
                        <Link
                            to="/"
                            className="navbar-brand py-2 m-0"
                        >
                            <img
                                src={logoLargeScreen}
                                className="max-h-130px w-auto"
                                alt="logo"
                            />
                        </Link>
                        <small className="text-orange mb-0 mt-4">
                            <em>{data.residence}</em>
                        </small>
                        <ul class="nav justify-content-end my-5">
                            <li class="nav-item me-4">
                                <Link
                                    to="/"
                                    className={
                                        `nav-link ${!isWorkPage ? "active" : ""}`
                                    }
                                >
                                    {data.nav.about}
                                </Link>
                            </li>
                            <li class="nav-item">
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
                    <div className="d-flex justify-content-center w-100">
                        <img
                            src={purpleArrow}
                            className="w-auto"
                            alt="purple-arrow"
                        />
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;
