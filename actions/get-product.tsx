import { Product } from "@/types";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

// const getProduct = async (id: string): Promise<Product> => { // take id string, return promise with type product
//   const res = await fetch(`${URL}/${id}`);

//   return res.json();
// };

// Sample dummy product data
const dummyProduct: Product = {
  id: "1",
  category: {
    id: "1",
    name: "Electronics",
    billboard: {
      id: "1",
      label: "Featured Electronics",
      imageUrl: "https://raw.githubusercontent.com/helvizar/ecommerce-catalog/master/public/man-jaket.png",
    },
  },
  name: "Dummy Product",
  price: "199.99",
  isFeatured: true,
  size: {
    id: "1",
    name: "Large",
    value: "L",
  },
  color: {
    id: "1",
    name: "Black",
    value: "#000000",
  },
  images: [
    {
      id: "1",
      url: "https://raw.githubusercontent.com/helvizar/ecommerce-catalog/master/public/man-jaket.png",
    },
    {
      id: "2",
      url: "https://raw.githubusercontent.com/helvizar/ecommerce-catalog/master/public/man-shirt.png",
    }
  ],
};

const getProduct = async (id: string): Promise<Product> => {
  
  return dummyProduct;
};

export default getProduct;
