import { useAccessToken } from "@hooks/useAccessToken";
import { AxiosHeaders, InternalAxiosRequestConfig } from "axios";

const authRequestInterceptor = async (config: InternalAxiosRequestConfig) => {
  try {
    if (!config.headers) {
      config.headers = {} as AxiosHeaders;
    }

    const tokens = await useAccessToken.getAccessToken();
    if (tokens) config.headers.Authorization = `Bearer ${tokens.token}`;
  } catch {}
  return config;
};

export default authRequestInterceptor;
