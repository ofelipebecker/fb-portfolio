import logo from "../assets/images/logo-v-orange.png";

const Header = () => {
    return (
        <header className="bg-purple">
            <div className="row">
                <div className="col-md-3 offset-md-3">English</div>
                <div className="col-md-3">Português</div>
            </div>
            <img src={logo} alt="logo" />
            <div className="row">
                <div className="col-md-3 offset-md-3">About</div>
                <div className="col-md-3">Work</div>
            </div>
        </header>
    );
};

export default Header;
