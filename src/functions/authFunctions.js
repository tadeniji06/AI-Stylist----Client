import { API_URL } from "../utils/api";
import axios from "axios";

export const updateOnBoarding = async (userId) => {
  try {
    const response = await axios.post(`${API_URL}/auth/updateOnboarding`, {
      userId: userId,
      onboardingCompleted: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signUp = async (
  nickname,
  email,
  password,
  age,
  country,
  state,
  favoriteColor,
  gender
) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, {
      nickname,
      email,
      password,
      age,
      country,
      state,
      favoriteColor,
      gender,
    });
    return response.data;
    // console.log(response.data);
  } catch (error) {
    throw error;
  }
};

export const requestPasswordReset = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/auth/requestReset`, {
      email,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const resetPassword = async (email, otpCode, newPassword) => {
  try {
    const response = await axios.post(`${API_URL}/auth/resetPassword`, {
      email,
      otpCode,
      newPassword,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
