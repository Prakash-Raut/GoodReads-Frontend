import axios from "axios";

export const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;
