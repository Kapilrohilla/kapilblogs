import axios from "axios";

// const baseUrl = "http://localhost:3000/api";
// eslint-disable-next-line no-unused-vars
let token;

const createuser = async (userdata) => {
  // const response = await axios.post(`${baseUrl}/users`, userdata);
  const response = await axios.post(`/users`, userdata);
  return response.data;
};
const login = async (loginCredentials) => {
  const response = await axios.post(`/login`, loginCredentials);
  // console.log(response, 0);
  const loggedinUser = response.data;
  return loggedinUser;
};
const updateUser = async (userData, config, id) => {
  const response = await axios.put(`/users/${id}`, userData, config);
  return response.data;
};
const deleteUser = async (id, config) => {
  const response = await axios.delete(`/users/${id}`, config);
  return response.data;
};
export default { createuser, login, updateUser, token, deleteUser };
