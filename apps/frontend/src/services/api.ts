import axios from "axios";

export const apiRest = axios.create({
  baseURL: "https://localhost:3030/",
});
