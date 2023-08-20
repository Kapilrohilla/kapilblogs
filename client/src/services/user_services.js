import axios from "axios";

const baseUrl = "http://localhost:3000/api";
// eslint-disable-next-line no-unused-vars
let token;

const createuser = async (userdata) => {
  const response = await axios.post(`${baseUrl}/users`, userdata);
  return response.data;
};
const login = async (loginCredentials) => {
  const response = await axios.post(`${baseUrl}/login`, loginCredentials);
  const loggedinUser = response.data;
  return loggedinUser;
};
export default { createuser, login, token };
