import { Price } from "@/types";

// Sample dummy price data
const dummyPrices: Price[] = [
  {
    id: "100000",
    name: "Under 100k",
    value: "100000",
  },
  {
    id: "200000",
    name: "Under 200k",
    value: "200000",
  },
  {
    id: "500000",
    name: "Under 500k",
    value: "500000",
  },
];

const getPrice = async (): Promise<Price[]> => {
  
  return dummyPrices;
};

export default getPrice;
