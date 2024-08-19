type IErrorData = {
  codigo: string;
  mensagem: string;
};

export class ErrorResponse<T extends IErrorData | undefined> extends Error {
  private _data?: T;

  constructor(data?: T) {
    super();
    this._data = data;
    this.name = "";
  }

  public _get() {
    return this._data;
  }

  public validateMessage(message?: string) {
    super.message = message || "Não foi possível prosseguir com a solicitação";
  }
}

const errorResponseInterceptor = (error: any) => {
  if (error.message === "Network Error") {
    return Promise.reject(new Error("Erro de conexão"));
  }

  return Promise.reject(
    new ErrorResponse(error?.response?.data).validateMessage(
      error?.response?.data.mensagem
    )
  );
};

export default errorResponseInterceptor;
