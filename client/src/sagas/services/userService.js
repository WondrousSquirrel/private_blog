import axios from "axios";
import Cookie from "js-cookie";
import endpoint from "../../config/appConfig";

export const registerService = async user => {
  try {
    const response = await axios
      .post('http://node-env.eba-h2rsrmam.eu-central-1.elasticbeanstalk.com/api/user', user);
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
      .post('http://node-env.eba-h2rsrmam.eu-central-1.elasticbeanstalk.com/api/user/login', user);
    console.log('try ' + response.data);
    Cookie.set("user_data", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.log(`${endpoint}/api/user/login:  `+ error.response);
    throw error.response.data;
  }
};