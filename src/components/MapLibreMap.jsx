import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export const MapLibreMap = () => {

  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainer.current,
      
      style: "https://tiles.stadiamaps.com/styles/osm_bright.json",
      center: [72.8777, 19.0760], // Mumbai
      zoom: 10,
    });

    new maplibregl.Marker({ color: "red" })
      .setLngLat([72.8777, 19.0760])
      .addTo(map);

    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapContainer}
      className="w-full h-full rounded-2xl"
    />
  );
};
