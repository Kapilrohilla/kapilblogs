import axios from "axios";
const baseUrl = "http://localhost:3000/api/blogs";

// GET ALL BlOG Of A User
const getBlog = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};
export default { getBlog };
