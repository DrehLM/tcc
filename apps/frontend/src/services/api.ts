import axios from "axios";

export const apiRest = axios.create({
  baseURL: "http://localhost:3030/",
});
