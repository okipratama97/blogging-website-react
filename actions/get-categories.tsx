import { Category } from "@/types";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

// const getCategories = async (): Promise<Category[]> => {
//   const res = await fetch(URL);

//   return res.json();
// };


// Data dummy categories
const dummyCategories: Category[] = [
  {
    id: "1",
    name: "Jacket",
    billboard: {
      id: "1",
      label: "New Jacket",
      imageUrl: "https://example.com/electronics.jpg"
    }
  },
  {
    id: "2",
    name: "Shirt",
    billboard: {
      id: "2",
      label: "Latest Fashion",
      imageUrl: "https://example.com/clothing.jpg"
    }
  },
  {
    id: "3",
    name: "Shoes",
    billboard: {
      id: "3",
      label: "Good Experience",
      imageUrl: "https://example.com/homedecor.jpg"
    }
  }
];

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  // Mengembalikan data dummy untuk pengujian
  return dummyCategories;
};

export default getCategories;
