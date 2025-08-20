import React, { useEffect, useState } from 'react';
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
  onReady?: (map: L.Map) => void;
}

const Map: React.FC<MapProps> = ({
  coordinates,
  title,
  price,
  className = 'w-full h-64',
  zoom = 13,
  onReady,
}) => {
  const position: [number, number] = [coordinates.lat, coordinates.lng];
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (error) {
    return (
      <div className={`${className} flex items-center justify-center text-center text-sm`}>
        ⚠️ Map failed to load. Please try reloading the page.
      </div>
    );
  }

  return (
    <div className={className} style={{ position: 'relative' }}>
      {visible && (
        <div
          className={`absolute inset-0 flex items-center justify-center bg-white transition-opacity duration-300 ${
            loading ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-12 h-12 border-4 border-[#4CAF87] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <MapContainer
        center={position}
        zoom={zoom}
        className="w-full h-full"
        scrollWheelZoom
        whenCreated={(map) => {
          onReady?.(map);
          map.on('load', () => setLoading(false));
        }}
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
    </div>
  );
};

export default Map;
