import ReactLogo from "../assets/images/react-logo.svg";

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-light px-3 px-sm-0">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 d-flex align-items-center">
                        <span className="d-flex align-items-center text-purple">
                            Felipe Becker | Desenvolvedor Front-end | 2025
                        </span>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="d-flex align-items-center text-purple">
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
