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
  console.log(response, 0);
  const loggedinUser = response.data;
  return loggedinUser;
};
const updateUser = async (userData, config, id) => {
  const response = await axios.put(`${baseUrl}/users/${id}`, userData, config);
  return response.data;
};
const deleteUser = async (id, config) => {
  const response = await axios.delete(`${baseUrl}/users/${id}`, config);
  return response.data;
};
export default { createuser, login, updateUser, token, deleteUser };
