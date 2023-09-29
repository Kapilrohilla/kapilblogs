import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/api/blogs";

// GET ALL BlOG Of A User
const getAllBlog = async () => {
  const response = await axios.get("/");
  return response.data;
};
const createBlog = async (newData, config) => {
  const response = await axios.post("/", newData, config);
  return response.data;
};
const deleteBlog = async (id, config) => {
  const response = await axios.delete(`/${id}`, config);
  return response.data;
};
const getSpecificBlog = async (id) => {
  const response = await axios.get(`/${id}`);
  return response.data;
};
export default { getAllBlog, createBlog, deleteBlog, getSpecificBlog };
