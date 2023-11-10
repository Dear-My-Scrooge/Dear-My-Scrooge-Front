import axios from "axios";

const instance = axios.create({
  baseURL: "http://52.78.203.161/api/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
});

export default instance;
