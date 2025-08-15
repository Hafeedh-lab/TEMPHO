import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { mockListings, Listing } from '../data/mockListings';

function filterListings(data: Listing[], params: URLSearchParams): Listing[] {
  let filtered = [...data];
  const location = params.get('location');
  const price = params.get('price');
  const guestsParam = params.get('guests');
  const sort = params.get('sort');

  if (location) {
    const locLower = location.toLowerCase();
    filtered = filtered.filter((l) => l.location.toLowerCase().includes(locLower));
  }

  if (price) {
    const [minStr, maxStr] = price.split('-');
    const min = parseInt(minStr, 10) || 0;
    const max = maxStr ? parseInt(maxStr, 10) : Infinity;
    filtered = filtered.filter((l) => l.price >= min && l.price <= max);
  }

  if (guestsParam) {
    const guests = parseInt(guestsParam, 10);
    if (!Number.isNaN(guests)) {
      filtered = filtered.filter((l) => l.guests >= guests);
    }
  }

  if (sort === 'asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'desc') {
    filtered.sort((a, b) => b.price - a.price);
  }

  return filtered;
}

export function useListingsData() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [params] = useSearchParams();

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const res = await fetch('/api/listings');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setListings(filterListings(data, params));
            setLoading(false);
            return;
          }
        }
        // Fallback to mock data
        setListings(filterListings(mockListings, params));
      } catch (e: any) {
        setError(e);
        setListings(filterListings(mockListings, params));
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [params]);

  return { listings, loading, error };
}

export default useListingsData;
