import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const defaultIcon = new L.Icon({
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

export const Map: React.FC<MapProps> = ({
  coordinates,
  title,
  price,
  className = '',
  zoom = 13,
}) => {
  return (
    <MapContainer
      center={[coordinates.lat, coordinates.lng] as any}
      zoom={zoom}
      className={className}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[coordinates.lat, coordinates.lng] as any} icon={defaultIcon}>
        <Popup>
          <div className="font-semibold">{title}</div>
          <div>{price}</div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
