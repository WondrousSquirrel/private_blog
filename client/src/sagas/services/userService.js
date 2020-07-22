import axios from "axios";
import Cookie from "js-cookie";
import endpoint from "../../config/appConfig";

export const registerService = async user => {
  try {
    const response = await axios
      .post(`${endpoint}/api/user`, user);
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
      .post(`${endpoint}/api/user/login`, user);
    Cookie.set("user_data", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};