import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Listing } from '../data/mockListings';

const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png'
});

const activeIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

interface MapPanelProps {
  listings: Listing[];
  selectedId?: number;
  onMarkerClick?: (id: number) => void;
}

const FitBounds: React.FC<{ listings: Listing[] }> = ({ listings }) => {
  const map = useMap();
  useEffect(() => {
    if (!listings.length) return;
    const bounds = L.latLngBounds(
      listings.map((l) => [l.coordinates.lat, l.coordinates.lng])
    );
    if (listings.length === 1) {
      map.setView(bounds.getCenter(), 12);
    } else {
      map.fitBounds(bounds, { padding: [20, 20] });
    }
  }, [listings, map]);
  return null;
};

const MapPanel: React.FC<MapPanelProps> = ({ listings, selectedId, onMarkerClick }) => {
  return (
    <MapContainer center={[0, 0]} zoom={3} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FitBounds listings={listings} />
      {listings.map((l) => (
        <Marker
          key={l.id}
          position={[l.coordinates.lat, l.coordinates.lng]}
          icon={l.id === selectedId ? activeIcon : defaultIcon}
          eventHandlers={{ click: () => onMarkerClick?.(l.id) }}
        />
      ))}
    </MapContainer>
  );
};

export default MapPanel;
