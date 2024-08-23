import axios from "axios";

const apiRequest = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8800/api",
  withCredentials: true,
});


export default apiRequest;
