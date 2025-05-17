import logo from "../assets/images/logo-v-orange.png";
import purpleArrow from "../assets/images/purple-arrow-home.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="bg-purple shadow-sm">
                <div className="row">
                    <div className="col-md-4 offset-md-4 my-5 text-center">
                        <img src={logo} className="w-auto" alt="logo" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <ul className="nav justify-content-center mb-4">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">
                                    Sobre
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/work" className="nav-link">
                                    Projetos
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <img src={purpleArrow} className="w-auto" alt="purple-arrow" />
            </div>
        </header>
    );
};

export default Header;
