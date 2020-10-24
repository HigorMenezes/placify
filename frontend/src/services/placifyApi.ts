import axios from "axios";

const placifyApi = axios.create({
  baseURL: "http://localhost:3333",
  withCredentials: true,
});

export default placifyApi;
