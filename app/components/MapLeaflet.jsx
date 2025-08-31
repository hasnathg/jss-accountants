"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MapLeaflet({ lat = 51.5086, lng = -0.5049, name, address, tel }) {
  const center = [lat, lng];

  return (
    <div className="relative w-full h-[360px] md:h-[420px] overflow-hidden shadow [border-radius:3rem_0_3rem_0]">
      <MapContainer center={center} zoom={14} scrollWheelZoom={false} className="absolute inset-0">
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={markerIcon}>
          <Popup>
            <strong>{name || "JSS & Co Accountants"}</strong>
            <br />
            {address || "26 Thorney Lane South, Iver, Buckinghamshire, SL0 9AE"}
            {tel ? (
              <>
                <br />
                TEL: {tel}
              </>
            ) : null}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
