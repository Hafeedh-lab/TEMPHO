export interface PropertyListing {
  id: number;
  slug: string;
  images: string[];
  price: string;
  propertyType: string;
  address: string;
  beds: number;
  baths: number;
  garage: number;
  coordinates: { lat: number; lng: number };
}

export const propertyListings: PropertyListing[] = [
  {
    id: 1,
    slug: '500-halderfair-tower',
    images: [
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1396125/pexels-photo-1396125.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1396129/pexels-photo-1396129.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1396135/pexels-photo-1396135.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    price: "CA$1500/month",
    propertyType: "Condominium",
    address: "500 Halderfair Tower",
    beds: 2,
    baths: 2,
    garage: 1,
    coordinates: { lat: 43.6532, lng: -79.3832 },
  },
  {
    id: 2,
    slug: '54-ferrinhill-street',
    images: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    price: "CA$1500/month",
    propertyType: "Apartment",
    address: "54 Ferrinhill Street",
    beds: 2,
    baths: 2,
    garage: 1,
    coordinates: { lat: 49.2827, lng: -123.1207 },
  },
  {
    id: 3,
    slug: '23-siennalane-hill',
    images: [
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1643395/pexels-photo-1643395.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1643401/pexels-photo-1643401.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    price: "CA$1500/month",
    propertyType: "House",
    address: "23 Siennalane Hill",
    beds: 3,
    baths: 2,
    garage: 1,
    coordinates: { lat: 45.5017, lng: -73.5673 },
  },
  {
    id: 4,
    slug: '789-maple-street',
    images: [
      "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1732417/pexels-photo-1732417.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1732421/pexels-photo-1732421.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1732424/pexels-photo-1732424.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    price: "CA$1800/month",
    propertyType: "Townhouse",
    address: "789 Maple Street",
    beds: 3,
    baths: 2,
    garage: 2,
    coordinates: { lat: 51.0447, lng: -114.0719 },
  },
  {
    id: 5,
    slug: '456-oak-avenue',
    images: [
      "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1918294/pexels-photo-1918294.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1918299/pexels-photo-1918299.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1918309/pexels-photo-1918309.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    price: "CA$2200/month",
    propertyType: "Detached House",
    address: "456 Oak Avenue",
    beds: 4,
    baths: 3,
    garage: 2,
    coordinates: { lat: 45.4215, lng: -75.6972 },
  },
  {
    id: 6,
    slug: '123-pine-road',
    images: [
      "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2121131/pexels-photo-2121131.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2121141/pexels-photo-2121141.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    price: "CA$1200/month",
    propertyType: "Studio",
    address: "123 Pine Road",
    beds: 1,
    baths: 1,
    garage: 1,
    coordinates: { lat: 53.5461, lng: -113.4938 },
  },
  {
    id: 7,
    slug: '88-lakeview-drive',
    images: [
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1396129/pexels-photo-1396129.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1396135/pexels-photo-1396135.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    price: "CA$1700/month",
    propertyType: "Condominium",
    address: "88 Lakeview Drive",
    beds: 2,
    baths: 1,
    garage: 1,
    coordinates: { lat: 44.2312, lng: -76.4860 },
  },
  {
    id: 8,
    slug: '102-riverview-avenue',
    images: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    price: "CA$1600/month",
    propertyType: "Apartment",
    address: "102 Riverview Avenue",
    beds: 2,
    baths: 1,
    garage: 1,
    coordinates: { lat: 52.2681, lng: -113.8112 },
  },
];

// Group listings by category for carousel display
export const listingCategories = [
  {
    title: "Featured Properties",
    listings: propertyListings.slice(0, 4),
  },
  {
    title: "New Listings",
    listings: propertyListings.slice(4, 8),
  },
];
