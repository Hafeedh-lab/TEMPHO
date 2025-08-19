import { propertyListings } from './listings';

export const mockListings = [
  {
    id: 1,
    title: "Modern Condo in Downtown Toronto",
    location: "Toronto, Canada",
    price: 1800,
    guests: 2,
    images: propertyListings[0].images,
    image: propertyListings[0].images[0],
    coordinates: { lat: 43.6532, lng: -79.3832 }
  },
  {
    id: 2,
    title: "Cozy Apartment in Vancouver",
    location: "Vancouver, Canada",
    price: 1500,
    guests: 4,
    images: propertyListings[1].images,
    image: propertyListings[1].images[0],
    coordinates: { lat: 49.2827, lng: -123.1207 }
  },
  {
    id: 3,
    title: "Luxury Home in Montreal",
    location: "Montreal, Canada",
    price: 2500,
    guests: 5,
    images: propertyListings[2].images,
    image: propertyListings[2].images[0],
    coordinates: { lat: 45.5017, lng: -73.5673 }
  },
  {
    id: 4,
    title: "Calgary Family House",
    location: "Calgary, Canada",
    price: 1300,
    guests: 3,
    images: propertyListings[3].images,
    image: propertyListings[3].images[0],
    coordinates: { lat: 51.0447, lng: -114.0719 }
  }
];

export type Listing = typeof mockListings[number];
