import React, { useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import ListingCard from '../components/ListingCard';
import MapPanel from '../components/MapPanel';
import useListingsData from '../hooks/useListingsData';
import '../styles/Listings.css';

const ITEMS_PER_PAGE = 12;

const ListingsPage: React.FC = () => {
  const listings = useListingsData();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const listRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleMarkerClick = (id: number) => {
    const el = listRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setSelectedId(id);
  };

  const handleListingClick = (id: number) => {
    setSelectedId(id);
  };

  const sort = searchParams.get('sort') || '';
  const locationQuery = searchParams.get('location');

  const changeSort = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('sort', value);
    } else {
      params.delete('sort');
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginated = listings.slice(start, start + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(listings.length / ITEMS_PER_PAGE) || 1;

  return (
    <div className="listings-page min-h-screen">
      <Header />
      <div className="pt-[100px] px-4 md:px-6 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <select
              value={sort}
              onChange={(e) => changeSort(e.target.value)}
              className="border rounded p-2"
            >
              <option value="">Recommended</option>
              <option value="asc">Lowest Price First</option>
              <option value="desc">Highest Price First</option>
            </select>
            <button
              onClick={clearFilters}
              className="text-[#4CAF87] underline"
            >
              Clear Filters
            </button>
          </div>
          <div className="listings-grid">
            {paginated.map((l) => (
              <div
                key={l.id}
                ref={(el) => (listRefs.current[l.id] = el)}
                onClick={() => handleListingClick(l.id)}
              >
                <ListingCard listing={l} selected={selectedId === l.id} />
              </div>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-4">
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Prev
              </button>
              <span className="text-sm">
                Page {page} / {totalPages}
              </span>
              <button
                disabled={page === totalPages}
                onClick={() => setPage((p) => p + 1)}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
        <div className="md:w-1/2">
          <MapPanel
            listings={listings}
            selectedId={selectedId}
            onMarkerClick={handleMarkerClick}
            locationQuery={locationQuery}
          />
        </div>
      </div>
    </div>
  );
};

export default ListingsPage;
