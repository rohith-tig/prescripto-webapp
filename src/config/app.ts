import axios from "axios";

const BASE_URL = process.env.REACT_APP_URL;

export interface APIResponse<D> {
  data?: D;
  message?: string;
  error?: string;
}

export const api = axios.create({
  baseURL: BASE_URL,
});
