import placeholderChart from "../assets/images/placeholder-chart.png";
import placeholderQuote from "../assets/images/placeholder-quote.png";
import placeholderTable from "../assets/images/placeholder-table.png";

import CityMap from "../components/CityMap";

const Home = () => {
    return (
        <div className="container mt-5 text-center">
            <h1 className="mb-5">Sobre</h1>
            <div className="row g-3">
                <div className="col-md-5 offset-md-1">
                    <h2>Onde está Felipe?</h2>
                    <div className="card rounded-3">
                        <div className="card-body">
                            <CityMap />
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <h2>Habilidades</h2>
                    <img className="w-100" src={placeholderChart} alt="..." />
                </div>
            </div>
            <div className="row g-3 mt-5">
                <div className="col-md-5 offset-md-1">
                    <h2>Educação</h2>
                    <img
                        className="w-100"
                        src={placeholderTable}
                        alt="..."
                    ></img>
                </div>
                <div className="col-md-5">
                    <h2>Filosofia</h2>
                    <img
                        className="w-100"
                        src={placeholderQuote}
                        alt="..."
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default Home;
