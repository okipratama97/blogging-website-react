import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories/public`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL +"?"+ new URLSearchParams({order: "order", sort: "desc"}))
  const {data} = await res.json(); 

  return data
};

export default getCategories;
