import axios from "axios";
import Cookie from "js-cookie";

export const registerService = async user => {
  try {
    const response = await axios
      .post("http://127.0.0.1:5000/api/user/", user);
    Cookie.set("user_data", JSON.stringify(response.data));
    return response.data;
  }
  catch (response_1) {
    throw new Error(response_1);
  }
};