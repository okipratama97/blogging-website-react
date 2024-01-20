import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/items/public`;

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`);
  const {data} = await res.json(); 
  return data
};

// Sample dummy product data
// const dummyProduct: Product = {
//   id: "1",
//   category: {
//     id: "1",
//     name: "Electronics",
//     billboard: {
//       id: "1",
//       label: "Featured Electronics",
//       imageUrl: "https://raw.githubusercontent.com/helvizar/ecommerce-catalog/master/public/man-jaket.png",
//     },
//   },
//   name: "Dummy Product",
//   price: 199,
//   isFeatured: true,
//   size: {
//     id: "1",
//     name: "Large",
//     value: "L",
//   },
//   color: {
//     id: "1",
//     name: "Black",
//     value: "#000000",
//   },
//   images: [ 
//     "https://raw.githubusercontent.com/helvizar/ecommerce-catalog/master/public/man-jaket.png",
//     "https://raw.githubusercontent.com/helvizar/ecommerce-catalog/master/public/man-shirt.png",
//   ],
// };

// const getProduct = async (id: string): Promise<Product> => {
  
//   return dummyProduct;
// };

export default getProduct;
