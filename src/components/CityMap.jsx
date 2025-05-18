import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
    "pk.eyJ1IjoiZmxwYmVja2VyIiwiYSI6ImNtYXNyajA3MTBxNzcycW9oeHpqc252enIifQ.NcUYoQyQ6hlbe5SvZyvz0A";

const cityCoordinates = [-48.6769029, -27.642029];

const CityMap = () => {
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);
    const markerRefs = useRef([]);
    const [zoomedIn, setZoomedIn] = useState(false);

    const generateRandomMarkers = () => {
        const markers = Array.from({ length: 50 }).map(() => {
            const lng = Math.random() * 360 - 180;
            const lat = Math.random() * 180 - 90;
            const color = "#ff931e";

            return new mapboxgl.Marker({ color })
                .setLngLat([lng, lat])
                .addTo(mapRef.current);
        });

        markerRefs.current = markers;
    };

    const clearRandomMarkers = () => {
        markerRefs.current.forEach((marker) => marker.remove());
        markerRefs.current = [];
    };

    const zoomToCity = () => {
        if (!mapRef.current) return;

        clearRandomMarkers();

        mapRef.current.flyTo({
            center: cityCoordinates,
            zoom: 14,
            speed: 2,
            curve: 1.42,
            essential: true,
        });

        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
            <ul class="list-unstyled text-start text-purple mb-0">
                <li class="mb-4">Olá! Estou em Palhoça/SC - Brasil!</li>
                <li>Entre em contato comigo em:
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
                generateRandomMarkers();
            });
        }, 100);
    }, []);

    return (
        <div style={{ textAlign: "center" }}>
            {!zoomedIn && (
                <button
                    onClick={zoomToCity}
                    className="btn btn-outline-primary mb-3"
                >
                    Mostrar
                </button>
            )}
            <div
                ref={mapContainerRef}
                style={{ width: "100%", height: "400px" }}
            />
        </div>
    );
};

export default CityMap;
