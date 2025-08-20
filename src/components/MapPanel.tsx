import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { Listing } from '../data/mockListings';
import 'leaflet/dist/leaflet.css';

const defaultIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const activeIcon = new L.Icon({
  iconUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

interface MapPanelProps {
  listings: Listing[];
  selectedId: number | null;
  onSelect: (id: number) => void;
}

const FitBounds: React.FC<{ listings: Listing[] }> = ({ listings }) => {
  const map = useMap();
  useEffect(() => {
    if (listings.length === 0) return;
    const bounds = L.latLngBounds(listings.map((l) => [l.coordinates.lat, l.coordinates.lng]));
    map.fitBounds(bounds, { padding: [20, 20] });
  }, [listings, map]);
  return null;
};

export const MapPanel: React.FC<MapPanelProps> = ({ listings, selectedId, onSelect }) => {
  const center = listings.length
    ? [listings[0].coordinates.lat, listings[0].coordinates.lng]
    : [0, 0];

  return (
    <MapContainer center={center as any} zoom={4} className="w-full h-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <FitBounds listings={listings} />
      {listings.map((l) => (
        <Marker
          key={l.id}
          position={[l.coordinates.lat, l.coordinates.lng] as any}
          icon={selectedId === l.id ? activeIcon : defaultIcon}
          eventHandlers={{ click: () => onSelect(l.id) }}
        >
          <Popup>
            <div className="text-center [font-family:'Golos_Text',Helvetica]">
              <div className="font-semibold">{l.title}</div>
              <div className="text-sm text-gray-600">CA${l.price}/month</div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapPanel;
