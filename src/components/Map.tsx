import React, { useState } from 'react';
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!error && (
        <div className={`absolute inset-0 flex items-center justify-center bg-white transition-opacity duration-300 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="w-8 h-8 border-4 border-[#4CAF87] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-white text-center p-4">
          <p className="text-sm text-gray-700">⚠️ Map failed to load. Please try reloading the page.</p>
        </div>
      )}
      {!error && (
        <MapContainer
          center={position}
          zoom={zoom}
          className="w-full h-full"
          scrollWheelZoom
          whenReady={() => setLoading(false)}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            eventHandlers={{ tileerror: () => setError(true) }}
          />
          <Marker position={position} icon={icon}>
            <Popup>
              <div className="text-center">
                <div className="font-semibold">{title}</div>
                <div className="text-sm text-gray-600">{price}</div>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
