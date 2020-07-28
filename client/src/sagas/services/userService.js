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

export const getUserService = async (id, token) => {
  try {
    const response = await axios
      .get(`${endpoint}/api/user/${id}`, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteService = async id => {
  try {
    const response = await axios
      .delete(`${endpoint}/api/user/${id}`);
    Cookie.remove("user_data");
    // return response.data;
  } catch (error) {
    throw error.response.data;
  }
};