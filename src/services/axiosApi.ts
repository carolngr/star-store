import axios from "axios";
import authRequestInterceptor from "./interceptors/authRequestInterceptor";
import errorResponseInterceptor from "./interceptors/errorResponseApi";

const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use(authRequestInterceptor);

export { api };
