import { Color } from "@/types";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

// const getColor = async (): Promise<Color[]> => {
//   const res = await fetch(URL);

//   return res.json();
// };

// Sample dummy color data
const dummyColors: Color[] = [
  {
    id: "1",
    name: "Red",
    value: "#000000",
  },
  {
    id: "2",
    name: "Blue",
    value: "#0000FF",
  },
  {
    id: "3",
    name: "Green",
    value: "#00FF00",
  },
  // Add more dummy colors as needed
];

const getColor = async (): Promise<Color[]> => {
  
  return dummyColors;
};

export default getColor;
