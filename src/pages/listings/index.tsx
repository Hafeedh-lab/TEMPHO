import React, { useRef, useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import Header from '../../components/Header';
import ListingCard from '../../components/ListingCard';
import MapPanel from '../../components/MapPanel';
import { mockListings, Listing } from '../../data/mockListings';
import { propertyListings } from '../../data/listings';
import '../../styles/Listings.css';

export const ListingsPage: React.FC = () => {
  // Use mock listings with demo images
  const demoListings: (Listing & { images?: string[] })[] = mockListings.map((listing) => {
    const match = propertyListings.find((p) => p.id === listing.id);
    return {
      ...listing,
      images: match ? match.images : [listing.image],
    };
  });

  const listings = demoListings;
  const [selected, setSelected] = useState<number | null>(null);
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const listingRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const sort = params.get('sort') || '';

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const newParams = new URLSearchParams(params);
    if (value) newParams.set('sort', value); else newParams.delete('sort');
    setParams(newParams);
  };

  const handleClear = () => {
    navigate('/listings');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMarkerSelect = (id: number) => {
    setSelected(id);
    listingRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Pagination
  const itemsPerPage = 12;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(listings.length / itemsPerPage) || 1;
  const start = (page - 1) * itemsPerPage;
  const currentListings = listings.slice(start, start + itemsPerPage);

  return (
    <div className="bg-[#FFF7EB] min-h-screen listings-page">
      <Header />
      <div className="pt-28 px-4 md:px-8 layout">
        <div className="listings-section flex-1">
          <div className="flex items-center justify-between mb-4">
            <select
              value={sort}
              onChange={handleSortChange}
              className="border rounded p-2 [font-family:'Golos_Text',Helvetica]"
            >
              <option value="">Recommended</option>
              <option value="asc">Lowest Price First</option>
              <option value="desc">Highest Price First</option>
            </select>
            <button
              onClick={handleClear}
              className="ml-4 text-[#4CAF87] underline"
            >
              Clear Filters
            </button>
          </div>
          <div className="listings-grid">
            {currentListings.map((l) => (
              <div
                key={l.id}
                ref={(el) => (listingRefs.current[l.id] = el)}
                className="mb-4"
              >
                <Link to={`/listing/${l.id}`}>
                  <ListingCard listing={l} selected={selected === l.id} />
                </Link>
              </div>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="flex justify-center space-x-2 mt-4">
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Prev
              </button>
              <span className="px-3 py-1">
                {page} / {totalPages}
              </span>
              <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
        <div className="map-section md:pl-4 md:mt-0 mt-6">
          <div className="map-wrapper">
            <MapPanel listings={listings} selectedId={selected} onSelect={handleMarkerSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingsPage;
