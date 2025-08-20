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
  return (
    <MapContainer
      center={[coordinates.lat, coordinates.lng] as any}
      zoom={zoom}
      scrollWheelZoom={false}
      className={className}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[coordinates.lat, coordinates.lng] as any} icon={icon}>
        <Popup>
          <div className="[font-family:'Golos_Text',Helvetica]">
            <div>{title}</div>
            <div>{price}</div>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
