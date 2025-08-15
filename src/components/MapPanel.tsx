import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/Listings.css';
import { Listing } from '../hooks/useListingsData';

interface Props {
  listings: Listing[];
  selectedId?: number | null;
  onSelect?: (id: number) => void;
  locationParam?: string | null;
}

const MapPanel: React.FC<Props> = ({ listings, selectedId, onSelect, locationParam }) => {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || listings.length === 0) return;
    if (locationParam) {
      const match = listings.find((l) =>
        l.location.toLowerCase().includes(locationParam.toLowerCase())
      );
      if (match) {
        mapRef.current.setView([match.coordinates.lat, match.coordinates.lng], 12);
        return;
      }
    }
    const bounds = L.latLngBounds(
      listings.map((l) => [l.coordinates.lat, l.coordinates.lng] as [number, number])
    );
    mapRef.current.fitBounds(bounds, { padding: [30, 30] });
  }, [listings, locationParam]);

  useEffect(() => {
    if (!mapRef.current) return;
    const selected = listings.find((l) => l.id === selectedId);
    if (selected) {
      mapRef.current.setView([selected.coordinates.lat, selected.coordinates.lng], 12);
    }
  }, [selectedId, listings]);

  const createIcon = (id: number) =>
    L.divIcon({
      className: `listing-marker${id === selectedId ? ' selected' : ''}`,
      html: '<div></div>',
    });

  return (
    <MapContainer
      style={{ height: '100%', width: '100%' }}
      zoom={4}
      center={[56, -106]}
      whenCreated={(map) => {
        mapRef.current = map;
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {listings.map((l) => (
        <Marker
          key={l.id}
          position={[l.coordinates.lat, l.coordinates.lng]}
          icon={createIcon(l.id)}
          eventHandlers={{
            click: () => onSelect?.(l.id),
          }}
        />
      ))}
    </MapContainer>
  );
};

export default MapPanel;
