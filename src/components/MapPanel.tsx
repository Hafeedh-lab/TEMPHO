import React, { useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Listing } from '../hooks/useListingsData';

interface MapPanelProps {
  listings: Listing[];
  selectedId: number | null;
  onMarkerClick: (id: number) => void;
  locationQuery?: string | null;
}

const FitBounds: React.FC<{ listings: Listing[]; selectedId: number | null; locationQuery?: string | null; }> = ({ listings, selectedId, locationQuery }) => {
  const map = useMap();
  useEffect(() => {
    if (selectedId) {
      const listing = listings.find((l) => l.id === selectedId);
      if (listing) {
        map.setView([listing.coordinates.lat, listing.coordinates.lng], 13);
        return;
      }
    }
    if (locationQuery) {
      const listing = listings.find((l) =>
        l.location.toLowerCase().includes(locationQuery.toLowerCase())
      );
      if (listing) {
        map.setView([listing.coordinates.lat, listing.coordinates.lng], 11);
        return;
      }
    }
    if (listings.length) {
      const bounds = listings.map((l) => [l.coordinates.lat, l.coordinates.lng]) as [number, number][];
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [listings, selectedId, locationQuery, map]);
  return null;
};

const MapPanel: React.FC<MapPanelProps> = ({ listings, selectedId, onMarkerClick, locationQuery }) => {

  return (
    <MapContainer
      center={[45, -75]}
      zoom={4}
      className="w-full h-96 md:h-[calc(100vh-100px)]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {listings.map((l) => (
        <CircleMarker
          key={l.id}
          center={[l.coordinates.lat, l.coordinates.lng]}
          pathOptions={{ color: selectedId === l.id ? '#4CAF87' : '#3388ff', fillColor: selectedId === l.id ? '#4CAF87' : '#3388ff', fillOpacity: 1 }}
          radius={10}
          eventHandlers={{ click: () => onMarkerClick(l.id) }}
        />
      ))}
      <FitBounds listings={listings} selectedId={selectedId} locationQuery={locationQuery} />
    </MapContainer>
  );
};

export default MapPanel;
