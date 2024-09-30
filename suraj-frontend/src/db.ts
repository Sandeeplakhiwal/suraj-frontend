export const ProductsJSON = [
  {
    id: 1,
    name: "Australian Opal Bundle",
    description: "Exquisite 30 Carat Australian Opal collection",
    price: 299.99,
    category: "Jewelry",
    seller: "Opal World",
    inStock: true,
    imageUrl:
      "https://via.placeholder.com/300x300.png?text=Australian+Opal+Bundle",
    rating: 4.5,
    reviews: 127,
  },
  {
    id: 2,
    name: "Professional DSLR Camera",
    description: "High-quality digital camera for photography enthusiasts",
    price: 899.0,
    category: "Electronics",
    seller: "CameraPro",
    inStock: true,
    imageUrl: "https://via.placeholder.com/300x300.png?text=DSLR+Camera",
    rating: 4.8,
    reviews: 302,
  },
  {
    id: 3,
    name: "Custom Wedding Dress Frame",
    description: "Beautiful frame to preserve your wedding dress memories",
    price: 149.99,
    category: "Home Decor",
    seller: "The Beautiful Frame Company",
    inStock: true,
    imageUrl:
      "https://via.placeholder.com/300x300.png?text=Wedding+Dress+Frame",
    rating: 4.2,
    reviews: 89,
  },
];

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  seller: string;
  inStock: boolean;
  imageUrl: string;
  rating: number;
  reviews: number;
}
