import { Billboard } from "@/types";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

// const getBillboard = async (id: string): Promise<Billboard> => { // take id string, return promise with type billboard
//   const res = await fetch(`${URL}/${id}`);

//   return res.json();
// };

// data for the Billboard
const res: Billboard = {
  id: "1",
  label: "Sayur Segar Petani",
  imageUrl: "https://i0.wp.com/resepkoki.id/wp-content/uploads/2018/03/sayur-mayur-Cropped-1.jpg?fit=800%2C800&ssl=1",
};

const getBillboard = async (id: string): Promise<Billboard> => {
  // fetching data from the API
  // this would be the fetch() call to API
  // returning the data
  return res;
};

export default getBillboard;
