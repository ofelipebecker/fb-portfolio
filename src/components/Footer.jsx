import ReactLogo from "../assets/images/react-logo.svg";

const Footer = () => {
    return (
        <footer class="footer mt-auto py-3 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex align-items-center text-purple">
                            <span>
                                Felipe Becker | Desenvolvedor Front-end | 2025
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
    );
};

export default Footer;
