import axios from "axios";
import Cookie from "js-cookie";

export const registerService = async user => {
  try {
    const response = await axios
      .post("http://127.0.0.1:5000/api/user/", user);
    Cookie.set("user_data", JSON.stringify(response.data));
    return response.data;
  }
  catch (error) {
    throw error.response.data;
  }
};

export const loginService = async user => {
  try {
    const response = await axios
      .post("http://127.0.0.1:5000/api/user/login", user);
    Cookie.set("user_data", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};