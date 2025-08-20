import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const icon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface MapProps {
  coordinates: { lat: number; lng: number };
  title: string;
  price: string;
  className?: string;
  zoom?: number;
}

const Map: React.FC<MapProps> = ({ coordinates, title, price, className = 'w-full h-64', zoom = 13 }) => {
  const position: [number, number] = [coordinates.lat, coordinates.lng];

  return (
    <MapContainer center={position} zoom={zoom} className={className} scrollWheelZoom>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={icon}>
        <Popup>
          <div className="text-center">
            <div className="font-semibold">{title}</div>
            <div className="text-sm text-gray-600">{price}</div>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
