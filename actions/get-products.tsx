import qs from "query-string";

import { Product, Size, Color, Category, Image, Billboard } from "@/types";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

// interface Query {
//   categoryId?: string;
//   colorId?: string;
//   sizeId?: string;
//   isFeatured?: string;
// }

// const getProducts = async (query: Query): Promise<Product[]> => {
//   const url = qs.stringifyUrl({
//     url: URL,
//     query: {
//       colorId: query.colorId,
//       sizeId: query.sizeId,
//       categoryId: query.sizeId,
//       isFeatured: query.isFeatured
//     },
//   });

//   const res = await fetch(url);

//   return res.json();

// }

// Simulating size data
const simulatedSizeData: Size[] = [
  { id: "1", name: "Small", value: "S" },
  { id: "2", name: "Medium", value: "M" },
  { id: "3", name: "Large", value: "L" },
  // Add more simulated sizes as needed
];

// Simulating color data
const simulatedColorData: Color[] = [
  { id: "1", name: "Red", value: "#000000" },
  { id: "2", name: "Blue", value: "#0000FF" },
  { id: "3", name: "Green", value: "#00FF00" },
  // Add more simulated colors as needed
];

// Simulating image data
const simulatedImageData: Image[] = [
  { id: "1", url: "https://raw.githubusercontent.com/helvizar/ecommerce-catalog/master/public/man-jaket.png" },
  { id: "2", url: "https://raw.githubusercontent.com/helvizar/ecommerce-catalog/master/public/man-shirt.png" },
  // Add more simulated images as needed
];

// Simulating billboard data
const simulatedBillboardData: Billboard = {
  id: "1",
  label: "Featured Product",
  imageUrl: "https://example.com/images/featured-product.jpg",
};

// Simulating category data
const simulatedCategoryData: Category[] = [
  {
    id: "1",
    name: "Electronics",
    billboard: simulatedBillboardData,
  },
  {
    id: "2",
    name: "Clothing",
    billboard: simulatedBillboardData,
  },
  // Add more simulated categories as needed
];

// Simulating product data
const simulatedProductData: Product[] = [
  {
    id: "1",
    category: simulatedCategoryData[0],
    name: "Example Product 1",
    price: "99.99",
    isFeatured: true,
    size: simulatedSizeData[0],
    color: simulatedColorData[0],
    images: [simulatedImageData[0]],
  },
  {
    id: "2",
    category: simulatedCategoryData[1],
    name: "Example Product 2",
    price: "149.99",
    isFeatured: false,
    size: simulatedSizeData[1],
    color: simulatedColorData[1],
    images: [simulatedImageData[1]],
  },
  // Add more simulated products as needed
];

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  // In a real application, this would involve fetching data from your API
  // For now, we'll return the simulated product data
  return simulatedProductData;
};

export default getProducts;
