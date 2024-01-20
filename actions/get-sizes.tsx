import { Size } from "@/types";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

// const getSizes = async (): Promise<Size[]> => {
//   const res = await fetch(URL);

//   return res.json();
// };

// Sample dummy size data
const dummySizes: Size[] = [
  {
    id: "Small",
    name: "Small",
    value: "S",
  },
  {
    id: "Medium",
    name: "Medium",
    value: "M",
  },
  {
    id: "Large",
    name: "Large",
    value: "L",
  },
  // Add more dummy sizes as needed
];

const getSizes = async (): Promise<Size[]> => {
  // In a real application, this would involve fetching data from your API
  // For now, we'll return the dummy size data
  return dummySizes;
};

export default getSizes;
