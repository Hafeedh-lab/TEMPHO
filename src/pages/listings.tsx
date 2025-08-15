import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ListingCard from '../components/ListingCard';
import MapPanel from '../components/MapPanel';
import useListingsData from '../hooks/useListingsData';
import '../styles/Listings.css';
import { useLocation, useNavigate } from 'react-router-dom';

const ITEMS_PER_PAGE = 12;

const ListingsPage: React.FC = () => {
  const { listings } = useListingsData();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const sortParam = params.get('sort') || '';
  const locationParam = params.get('location');

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value) params.set('sort', value); else params.delete('sort');
    navigate({ pathname: '/listings', search: params.toString() });
  };

  useEffect(() => {
    setPage(1);
  }, [location.search]);

  const handleClear = () => {
    navigate('/listings');
    setSelectedId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMarkerSelect = (id: number) => {
    setSelectedId(id);
    const el = document.getElementById(`listing-${id}`);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleListingClick = (id: number) => {
    setSelectedId(id);
  };

  const start = (page - 1) * ITEMS_PER_PAGE;
  const pageListings = listings.slice(start, start + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(listings.length / ITEMS_PER_PAGE) || 1;

  const changePage = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="listings-container">
      <Header />
      <div className="pt-24 px-4 listings-layout">
        <div className="listings-list pr-4">
          <div className="flex justify-between items-center mb-4">
            <select value={sortParam} onChange={handleSortChange} className="border p-2 rounded-md bg-white">
              <option value="">Recommended</option>
              <option value="asc">Lowest Price First</option>
              <option value="desc">Highest Price First</option>
            </select>
            <button onClick={handleClear} className="ml-4 bg-[#4CAF87] text-white px-4 py-2 rounded-md">Clear Filters</button>
          </div>
          {pageListings.map((listing) => (
            <ListingCard
              key={listing.id}
              listing={listing}
              selected={selectedId === listing.id}
              onClick={() => handleListingClick(listing.id)}
            />
          ))}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 my-4">
              <button
                disabled={page === 1}
                onClick={() => changePage(page - 1)}
                className="px-3 py-1 bg-white border rounded disabled:opacity-50"
              >
                Prev
              </button>
              <span>
                {page} / {totalPages}
              </span>
              <button
                disabled={page === totalPages}
                onClick={() => changePage(page + 1)}
                className="px-3 py-1 bg-white border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
        <div className="listings-map mt-4 md:mt-0">
          <MapPanel
            listings={listings}
            selectedId={selectedId}
            onSelect={handleMarkerSelect}
            locationParam={locationParam}
          />
        </div>
      </div>
    </div>
  );
};

export default ListingsPage;
