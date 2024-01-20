import qs from "query-string";

import { Product, Size, Color, Category, Billboard } from "@/types";

const _URL = `${process.env.NEXT_PUBLIC_API_URL}/items/public`;

interface Query {
  category_id?: string;
  page?: number;
  limit?: number;
  order?: string;
  sort?: "ASC" | "DESC";
  search?: string;
  min_price?: number;
  max_price?: number;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: _URL,
    query: {
      category_id: query.category_id,
      page: query.page,
      limit: query.limit,
      order: query.order,
      sort: query.sort,
      search: query.search,
      max_price: query.max_price
    },
  });

  const res = await fetch(url);

  const {data} = await res.json(); 

  return data

}


// const URL = `${process.env.NEXT_PUBLIC_API_URL}/items/public`;

// const getItems = async (): Promise<Category[]> => {
//   const res = await fetch(URL +"?"+ new URLSearchParams({page: "1", limit:"1", order: "created_at", sort: "asc"}))
//   const {data} = await res.json(); 

//   return data
// };

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

// Simulating billboard data
const simulatedBillboardData: Billboard = {
  id: "1",
  label: "Featured Product",
  imageUrl: "https://example.com/images/featured-product.jpg",
};

// Simulating product data
const simulatedProductData: Product[] = [
  {
    id: "1",
    name: "Example Product 1",
    images: ["https://raw.githubusercontent.com/helvizar/ecommerce-catalog/master/public/man-jaket.png"],
    description: "is item",
    price: 99,
    stock: 1,
    status: "AVAILABLE",
    is_featured: true,
    options: {},
    // category: ,
  },
  {
    id: "2",
    name: "Example Product 2",
    images: ["https://raw.githubusercontent.com/helvizar/ecommerce-catalog/master/public/man-shirt.png"],
    description: "is item",
    price: 99,
    stock: 1,
    status: "AVAILABLE",
    is_featured: true,
    options: {},
    // category: ,
  },
  // Add more simulated products as needed
];

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

// const getProducts = async (query: Query): Promise<Product[]> => {
  // In a real application, this would involve fetching data from your API
  // For now, we'll return the simulated product data
//   return simulatedProductData;
// };

export default getProducts;
