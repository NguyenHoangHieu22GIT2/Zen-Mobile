import axios from "axios";

const http = axios.create({
  baseURL: "http://192.168.1.2:3001/v1",
  timeout: 6000,
  withCredentials: true
});

export default http;
