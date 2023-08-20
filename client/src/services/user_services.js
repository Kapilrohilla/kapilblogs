import axios from "axios";

const baseUrl = "http://localhost:3000/api/users";

const createuser = async (userdata) => {
  const response = await axios.post(baseUrl, userdata);
  return response.data;
};

export default { createuser };
