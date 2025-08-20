import React, { useRef, useState, useEffect } from 'react';
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
  /**
   * Optional flag used to trigger a resize of the underlying Leaflet map. When
   * the container size changes (e.g. toggling fullscreen in a modal) Leaflet
   * needs to recalculate its dimensions or the map will not fill the new
   * space. Passing the fullscreen state from the modal allows this component
   * to invalidate the map size whenever the flag changes.
   */
  fullscreen?: boolean;
}

const Map: React.FC<MapProps> = ({
  coordinates,
  title,
  price,
  className = 'w-full h-64',
  zoom = 13,
  fullscreen = false,
}) => {
  const position: [number, number] = [coordinates.lat, coordinates.lng];
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const mapRef = useRef<L.Map | null>(null);

  // Whenever the fullscreen flag changes, tell Leaflet to recalculate the
  // container size. Without this, the map may remain at the previous
  // dimensions and appear cropped or blank.
  useEffect(() => {
    if (mapRef.current) {
      setTimeout(() => mapRef.current?.invalidateSize(), 0);
    }
  }, [fullscreen]);

  return (
    <div className={`relative ${className}`}>
      {!error && (
        <MapContainer
          center={position}
          zoom={zoom}
          className="w-full h-full"
          scrollWheelZoom
          whenReady={(e) => {
            setLoading(false);
            mapRef.current = e.target;
            // Initial resize in case the map is rendered inside a hidden
            // container (e.g. a modal) and becomes visible later.
            setTimeout(() => mapRef.current?.invalidateSize(), 0);
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            eventHandlers={{
              tileerror: () => setError(true),
            }}
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
      {loading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 transition-opacity duration-300">
          <div className="w-8 h-8 border-4 border-[#4CAF87] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-white text-center text-sm">
          ⚠️ Map failed to load. Please try reloading the page.
        </div>
      )}
    </div>
  );
};

export default Map;
