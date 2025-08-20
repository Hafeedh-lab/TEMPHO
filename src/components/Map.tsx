import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

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

const AnimateView: React.FC<{ center: [number, number]; zoom: number }> = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom, { animate: true });
  return null;
};

export const Map: React.FC<MapProps> = ({ coordinates, title, price, className, zoom = 13 }) => {
  const center: [number, number] = [coordinates.lat, coordinates.lng];

  return (
    <MapContainer center={center} zoom={zoom} className={className} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <AnimateView center={center} zoom={zoom} />
      <Marker position={center} icon={defaultIcon}>
        <Popup>
          {title}<br />
          {price}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
