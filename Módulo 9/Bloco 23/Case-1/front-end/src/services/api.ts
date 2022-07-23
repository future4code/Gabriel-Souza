import axios from "axios";

export const api = axios.create({
  baseURL: "https://my-products-management.herokuapp.com"
});
