import axios from "axios";

const apiRequest = axios.create({
    baseURL: "https://estateease-react-real-estate-webpage.onrender.com/api",
    withCredentials: true,
});

export default apiRequest;

