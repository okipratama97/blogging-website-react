import axios from "axios";

export const post = async (url: string, body: any) => {
  try {
    const response = await axios.post(url, body);
    return response?.data?.data;
  } catch (error: any) {
    console.log("AXIOS post error: ", error);
    return error?.message;
  }
};
