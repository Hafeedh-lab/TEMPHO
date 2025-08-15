import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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

const parsePriceRange = (price?: string | null) => {
  if (!price) return null;
  const [min, max] = price.split('-').map((p) => parseInt(p, 10));
  return { min, max };
};

const useListingsData = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchListings = async () => {
      let data: Listing[] = [];
      try {
        const res = await fetch('/api/listings');
        if (res.ok) {
          const json = await res.json();
          if (Array.isArray(json) && json.length) {
            data = json;
          }
        }
      } catch {
        // ignore network errors
      }
      if (!data.length) {
        data = mockListings;
      }

      const location = searchParams.get('location');
      const price = parsePriceRange(searchParams.get('price'));
      const guests = parseInt(searchParams.get('guests') || '0', 10);
      const sort = searchParams.get('sort');

      let filtered = data;
      if (location) {
        filtered = filtered.filter((l) =>
          l.location.toLowerCase().includes(location.toLowerCase())
        );
      }
      if (price) {
        filtered = filtered.filter(
          (l) => l.price >= price.min && l.price <= price.max
        );
      }
      if (guests) {
        filtered = filtered.filter((l) => l.guests >= guests);
      }
      if (sort === 'asc') {
        filtered = filtered.slice().sort((a, b) => a.price - b.price);
      } else if (sort === 'desc') {
        filtered = filtered.slice().sort((a, b) => b.price - a.price);
      }

      setListings(filtered);
    };
    fetchListings();
  }, [searchParams]);

  return listings;
};

export default useListingsData;
