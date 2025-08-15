export interface PropertyListing {
  id: number;
  imageUrl: string;
  price: string;
  propertyType: string;
  address: string;
  beds: number;
  baths: number;
  garage: number;
  slug: string;
}

export const propertyListings: PropertyListing[] = [
  {
    id: 1,
    imageUrl: "https://c.animaapp.com/mdww1mm3xpw4UO/img/mask-group-3.png",
    price: "CA$ 1500/month",
    propertyType: "Condominium",
    address: "500 Halderfair Tower",
    beds: 2,
    baths: 2,
    garage: 1,
    slug: "500-halderfair-tower",
  },
  {
    id: 2,
    imageUrl: "https://c.animaapp.com/mdww1mm3xpw4UO/img/mask-group-4.png",
    price: "CA$ 1500/month",
    propertyType: "Apartment",
    address: "54 Ferrinhill Street",
    beds: 2,
    baths: 2,
    garage: 1,
    slug: "54-ferrinhill-street",
  },
  {
    id: 3,
    imageUrl: "https://c.animaapp.com/mdww1mm3xpw4UO/img/mask-group-5.png",
    price: "CA$ 1500/month",
    propertyType: "House",
    address: "23 Siennalane Hill",
    beds: 3,
    baths: 2,
    garage: 1,
    slug: "23-siennalane-hill",
  },
  {
    id: 4,
    imageUrl: "https://c.animaapp.com/mdww1mm3xpw4UO/img/mask-group-3.png",
    price: "CA$ 1800/month",
    propertyType: "Townhouse",
    address: "789 Maple Street",
    beds: 3,
    baths: 2,
    garage: 2,
    slug: "789-maple-street",
  },
  {
    id: 5,
    imageUrl: "https://c.animaapp.com/mdww1mm3xpw4UO/img/mask-group-4.png",
    price: "CA$ 2200/month",
    propertyType: "Detached House",
    address: "456 Oak Avenue",
    beds: 4,
    baths: 3,
    garage: 2,
    slug: "456-oak-avenue",
  },
  {
    id: 6,
    imageUrl: "https://c.animaapp.com/mdww1mm3xpw4UO/img/mask-group-5.png",
    price: "CA$ 1200/month",
    propertyType: "Studio",
    address: "123 Pine Road",
    beds: 1,
    baths: 1,
    garage: 1,
    slug: "123-pine-road",
  },
];

// Group listings by category for carousel display
export const listingCategories = [
  {
    title: "Featured Properties",
    listings: propertyListings.slice(0, 3),
  },
  {
    title: "New Listings",
    listings: propertyListings.slice(3, 6),
  },
];
