import { useAccessToken } from "@hooks/useAccessToken";

const unauthorizedInterceptorResponse = async (error: any) => {
  const status_error = error.response?.status;

  if (status_error === 401) {
    await useAccessToken.clearAccessToken();
  }
  return Promise.reject(error);
};

export default unauthorizedInterceptorResponse;
