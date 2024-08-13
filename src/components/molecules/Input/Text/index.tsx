import React from "react";
import { TextInput, View, Text, TextInputProps } from "react-native";
import { Container } from "./styles";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

export function InputText({ inputRef, ...rest }: Props) {
  return <Container ref={inputRef} placeholder="User name" {...rest} />;
}
export { Text };
