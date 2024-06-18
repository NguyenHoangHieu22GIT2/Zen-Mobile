import axios from "axios";

const http = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BASE_URL,
  timeout: 6000,
  withCredentials: true
});

export default http;
