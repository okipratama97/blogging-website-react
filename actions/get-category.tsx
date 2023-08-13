import { Category } from "@/types";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

// const getCategory = async (id: string): Promise<Category> => { // take id string, return promise with type product
//   const res = await fetch(`${URL}/${id}`);

//   return res.json();
// };

// Sample dummy category data
const dummyCategory: Category = {
  id: "1",
  name: "Jackets",
  billboard: {
    id: "1",
    label: "Explore Our Awesome Jackets",
    imageUrl: "https://previews.123rf.com/images/ogovorka/ogovorka1610/ogovorka161000027/66228500-collection-of-leather-jackets-on-hangers-in-the-shop-many-new-men-s-leather-winter-jackets.jpg",
  },
};

const getCategory = async (id: string): Promise<Category> => {
  
  return dummyCategory;
};

export default getCategory;
