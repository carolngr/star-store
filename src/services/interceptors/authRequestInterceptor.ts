import { useAccessToken } from "@hooks/useAccessToken";
import { AxiosHeaders, InternalAxiosRequestConfig } from "axios";

const authRequestInterceptor = async (config: InternalAxiosRequestConfig) => {
  try {
    console.log(JSON.stringify(config, null, 5));

    if (!config.headers) {
      config.headers = {} as AxiosHeaders;
    }
    console.log("aqui");

    const tokens = await useAccessToken.getAccessToken();
    if (tokens) config.headers.Authorization = `Bearer ${tokens.token}`;
  } catch {}
  return config;
};

export default authRequestInterceptor;
