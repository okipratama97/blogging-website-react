import { Billboard } from "@/types";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

// const getBillboard = async (id: string): Promise<Billboard> => { // take id string, return promise with type billboard
//   const res = await fetch(`${URL}/${id}`);

//   return res.json();
// };

// data for the Billboard
const res: Billboard = {
  id: "1",
  label: "New Arrivals",
  imageUrl: "https://i.pinimg.com/1200x/fd/42/9d/fd429d07fdc96db534672499565c5a9c.jpg",
};

const getBillboard = async (id: string): Promise<Billboard> => {
  // fetching data from the API
  // this would be the fetch() call to API
  // returning the data
  return res;
};

export default getBillboard;
