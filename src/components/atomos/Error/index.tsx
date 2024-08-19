import React from "react";

import { Error as ErrorComponent } from "./styles";

interface IErrorProps {
  text?: string;
}

export const Error = ({ text }: IErrorProps) => {
  return text ? (
    <ErrorComponent testID="span_error">{text}</ErrorComponent>
  ) : (
    <></>
  );
};
