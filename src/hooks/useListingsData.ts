import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Listing, mockListings } from '../data/mockListings';

export const useListingsData = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const [rawListings, setRawListings] = useState<Listing[]>([]);
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/listings');
        if (res.ok) {
          const json = await res.json();
          if (Array.isArray(json) && json.length) {
            setRawListings(json);
            setLoading(false);
            return;
          }
        }
      } catch (e) {
        // ignore
      }
      setRawListings(mockListings);
      setLoading(false);
    };
    fetchListings();
  }, []);

  useEffect(() => {
    let result = [...rawListings];

    const location = params.get('location');
    if (location) {
      result = result.filter((l) => l.location.toLowerCase().includes(location.toLowerCase()));
    }

    const price = params.get('price');
    if (price) {
      const [min, max] = price.split('-').map(Number);
      result = result.filter((l) => l.price >= (min || 0) && l.price <= (max || Infinity));
    }

    const guests = params.get('guests');
    if (guests) {
      const g = parseInt(guests, 10);
      if (!isNaN(g)) {
        result = result.filter((l) => l.guests >= g);
      }
    }

    const sort = params.get('sort');
    if (sort === 'asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'desc') {
      result.sort((a, b) => b.price - a.price);
    }

    setListings(result);
  }, [rawListings, search]);

  return { listings, loading };
};

export default useListingsData;
