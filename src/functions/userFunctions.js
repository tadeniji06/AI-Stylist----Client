import { API_URL } from "../utils/api";
import axios from "axios";

export const getCurrentUser = async (userId) => {
  try {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    const res = await axios.get(`${API_URL}/user/current`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};
