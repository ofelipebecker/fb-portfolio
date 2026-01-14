import CityMap from "../../components/home/CityMap";

const LocationCard = ({ title, mapData }) => {
    return (
        <div className="col-12 mt-5">
            <div className="card border-0 rounded-3 shadow-sm">
                <h2 className="mt-3 mb-0">{title}</h2>
                <div className="card-body">
                    <CityMap mapData={mapData} />
                </div>
            </div>
        </div>
    );
};

export default LocationCard;
