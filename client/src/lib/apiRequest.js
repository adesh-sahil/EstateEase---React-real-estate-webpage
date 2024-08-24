import axios from "axios";

const apiRequest = axios.create({
    baseURL: "https://estate-ease-react-real-estate-webpage-t78p-phxhp6hsy.vercel.app/api",
    withCredentials: true,
});

export default apiRequest;

