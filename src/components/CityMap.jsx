import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
    "pk.eyJ1IjoiZmxwYmVja2VyIiwiYSI6ImNtYXNyajA3MTBxNzcycW9oeHpqc252enIifQ.NcUYoQyQ6hlbe5SvZyvz0A";

const CityMap = () => {
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current || !mapContainerRef.current) return;

        const timeout = setTimeout(() => {
            mapRef.current = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: "mapbox://styles/mapbox/streets-v11",
                center: [-48.6275, -27.7556],
                zoom: 0,
            });

            new mapboxgl.Marker()
                .setLngLat([-48.6275, -27.7556])
                .addTo(mapRef.current);

            mapRef.current.on("load", () => {
                mapRef.current.resize();
            });
        }, 100);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            <div
                ref={mapContainerRef}
                style={{ width: "100%", height: "400px" }}
            />
        </div>
    );
};

export default CityMap;
