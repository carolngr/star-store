import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { Container } from "./styles";
import { LayoutProps } from "styled-system";

interface IInputProps extends TextInputProps {
  inputRef?: React.RefObject<TextInput>;
  placeholder: string;
  containerProps?: LayoutProps;
}

export function Text({
  inputRef,
  placeholder,
  containerProps,
  ...rest
}: IInputProps) {
  return (
    <Container {...containerProps}>
      <TextInput ref={inputRef} placeholder={placeholder} {...rest} />
    </Container>
  );
}
