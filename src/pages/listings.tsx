import React, { useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import ListingCard from '../components/ListingCard';
import MapPanel from '../components/MapPanel';
import useListingsData from '../hooks/useListingsData';
import '../styles/Listings.css';

const PAGE_SIZE = 12;

const ListingsPage: React.FC = () => {
  const { listings } = useListingsData();
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const sortParam = params.get('sort') || '';

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedId, setSelectedId] = useState<number | undefined>();
  const listRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const totalPages = Math.ceil(listings.length / PAGE_SIZE) || 1;
  const pageListings = listings.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val) params.set('sort', val); else params.delete('sort');
    navigate({ pathname: '/listings', search: params.toString() }, { replace: true });
  };

  const handleClearFilters = () => {
    navigate('/listings');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMarkerClick = (id: number) => {
    setSelectedId(id);
    listRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleListingClick = (id: number) => {
    setSelectedId(id);
  };

  return (
    <div>
      <Header />
      <div className="listings-page listings-content">
        <div className="listings-list">
          <div className="flex justify-between items-center mb-4">
            <select
              value={sortParam}
              onChange={handleSortChange}
              className="border p-2 rounded-md [font-family:'Golos_Text',Helvetica]"
            >
              <option value="">Recommended</option>
              <option value="asc">Lowest Price First</option>
              <option value="desc">Highest Price First</option>
            </select>
            <button
              onClick={handleClearFilters}
              className="text-[#4CAF87] underline [font-family:'Golos_Text',Helvetica]"
            >
              Clear Filters
            </button>
          </div>

          {pageListings.map((listing) => (
            <div key={listing.id} ref={(el) => (listRefs.current[listing.id] = el)}>
              <ListingCard
                listing={listing}
                onClick={() => handleListingClick(listing.id)}
                selected={listing.id === selectedId}
              />
            </div>
          ))}

          {totalPages > 1 && (
            <div className="flex justify-center space-x-2 mt-4">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 border rounded ${currentPage === i + 1 ? 'bg-[#4CAF87] text-white' : ''}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="listings-map">
          <MapPanel
            listings={pageListings}
            selectedId={selectedId}
            onMarkerClick={handleMarkerClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ListingsPage;
