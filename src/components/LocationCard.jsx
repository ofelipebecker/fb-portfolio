import CityMap from "../components/CityMap";

const LocationCard = () => {
    return (
        <div className="col-12 mt-5">
            <div className="card border-0 rounded-3 shadow-sm">
                <h2 className="mt-3 mb-0">Onde está Felipe?</h2>
                <div className="card-body">
                    <CityMap />
                </div>
            </div>
        </div>
    );
};

export default LocationCard;
