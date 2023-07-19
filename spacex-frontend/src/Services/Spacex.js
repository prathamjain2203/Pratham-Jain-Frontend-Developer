import axios from "axios";
import { toast } from "react-toastify";

export const getAllCapsules = async (setAllCapsules, filters, pagination) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/getAllCapsules`,
      {
        params: {
          ...filters,
          ...pagination,
        },
        headers: {
          Authorization: process.env.REACT_APP_API_KEY,
        },
      }
    );
    setAllCapsules && setAllCapsules(response?.data);
  } catch (err) {
    toast.error(err?.response?.data?.message);
  }
};
