import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
    "pk.eyJ1IjoiZmxwYmVja2VyIiwiYSI6ImNtYXNyajA3MTBxNzcycW9oeHpqc252enIifQ.NcUYoQyQ6hlbe5SvZyvz0A";

const cityCoordinates = [-48.6769029, -27.642029];

const CityMap = ({ mapData }) => {
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);
    const [zoomedIn, setZoomedIn] = useState(false);

    const { address, contactMessage, buttonText } = mapData;

    const zoomToCity = () => {
        if (!mapRef.current) return;

        mapRef.current.flyTo({
            center: cityCoordinates,
            zoom: 14,
            speed: 2,
            curve: 1.42,
            essential: true,
        });

        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
            <ul class="list-unstyled text-start text-purple mb-0">
                <li class="mb-4">${address}</li>
                <li>${contactMessage}
                    <ul class="list-unstyled">
                        <li class="my-2">📞 +55 (48) 999-847-042</li>
                        <li>✉️ ofelipebecker@proton.me</li>
                    </ul>
                </li>
            </ul>
        `);

        new mapboxgl.Marker({ color: "#6c2250" })
            .setLngLat(cityCoordinates)
            .setPopup(popup)
            .addTo(mapRef.current);

        popup.addTo(mapRef.current);

        setZoomedIn(true);
    };

    useEffect(() => {
        if (mapRef.current || !mapContainerRef.current) return;

        setTimeout(() => {
            mapRef.current = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: "mapbox://styles/mapbox/streets-v11",
                center: cityCoordinates,
                zoom: 0,
            });

            mapRef.current.on("load", () => {
                mapRef.current.resize();
            });
        }, 100);
    }, []);

    return (
        <div style={{ textAlign: "center" }} className="position-relative">
            {!zoomedIn && (
                <button
                    onClick={zoomToCity}
                    className="btn btn-purple btn-lg mb-3 position-absolute start-50 top-50 translate-middle z-1"
                >
                    {buttonText}
                </button>
            )}
            <div
                ref={mapContainerRef}
                style={{ width: "100%", height: "400px" }}
            ></div>
        </div>
    );
};

export default CityMap;
