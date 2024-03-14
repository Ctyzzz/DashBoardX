import axios from "axios";
import {getCookie} from 'typescript-cookie';

export const TOKEN = "access";
const API_URL = import.meta.env.VITE_API_URL;

export const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: getCookie(TOKEN) ? `Bearer ${getCookie(TOKEN)}` : "",
  },
});

export default instance;
