import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { mockListings } from '../data/mockListings';

export interface Listing {
  id: number;
  title: string;
  location: string;
  price: number;
  guests: number;
  image: string;
  coordinates: { lat: number; lng: number };
}

export const useListingsData = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const locationHook = useLocation();

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/listings');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length) {
            setListings(data);
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        // ignore and use mock data
      }
      setListings(mockListings);
      setLoading(false);
    };
    load();
  }, []);

  const params = new URLSearchParams(locationHook.search);
  let filtered = [...listings];

  const locationParam = params.get('location');
  const priceParam = params.get('price');
  const guestsParam = parseInt(params.get('guests') || '1', 10);
  const sortParam = params.get('sort');

  if (locationParam) {
    filtered = filtered.filter((l) =>
      l.location.toLowerCase().includes(locationParam.toLowerCase())
    );
  }

  if (priceParam) {
    const [minStr, maxStr] = priceParam.split('-');
    const min = parseInt(minStr, 10);
    const max = parseInt(maxStr, 10);
    filtered = filtered.filter((l) =>
      l.price >= min && (isNaN(max) ? true : l.price <= max)
    );
  }

  if (guestsParam) {
    filtered = filtered.filter((l) => l.guests >= guestsParam);
  }

  if (sortParam === 'asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortParam === 'desc') {
    filtered.sort((a, b) => b.price - a.price);
  }

  return { listings: filtered, loading };
};

export default useListingsData;
