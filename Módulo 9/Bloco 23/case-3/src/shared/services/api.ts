import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.teste-frontend.ateliedepropaganda.com.br/v1"
});