import { AxiosError, AxiosRequestConfig } from "axios";

export interface IErrorData {
  message: string;
  config: AxiosRequestConfig;
  status: boolean;
}

const errorResponseInterceptor = (axiosError: AxiosError<any>) => {
  const { config, response, status } = axiosError;
  let errorInstance = null;
  if (axiosError instanceof Error && !response) {
    errorInstance = String(axiosError);
  }
  const error = {
    config,
    message:
      errorInstance ??
      response?.data?.message ??
      "Ocorreu um erro ao buscar as informações, tente novamente mais tarde!",
    status,
  };

  return Promise.reject(error);
};

export default errorResponseInterceptor;
