import axios from "axios";

const api = axios.create({
  baseURL: "https://paranormal-cadaver-5ggjgr9575qvfvw5x-5173.app.github.dev",
  withCredentials: true,
});

export default api;
