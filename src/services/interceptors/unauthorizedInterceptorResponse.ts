import { useAccessToken } from "@hooks/useAccessToken";
import { AxiosError } from "axios";

const unauthorizedInterceptorResponse = async (error: AxiosError) => {
  const status_error = error.response?.status;

  if (status_error === 401) {
    await useAccessToken.clearAccessToken();
  }
  return Promise.reject(error);
};

export default unauthorizedInterceptorResponse;
