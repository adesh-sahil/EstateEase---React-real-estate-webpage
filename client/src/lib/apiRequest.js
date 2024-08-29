import axios from "axios";

const apiRequest = axios.create({
    // baseURL: "https://estateease-react-real-estate-webpage.onrender.com/api",
    baseURL: "http://localhost:8800/api",
    withCredentials: true,
});

export default apiRequest;

