import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { Container } from "./styles";
import { LayoutProps } from "styled-system";

interface IInputProps
  extends Omit<TextInputProps, "verticalAlign">,
    LayoutProps {
  inputRef?: React.RefObject<TextInput>;
}

export function Text({ inputRef, ...rest }: IInputProps) {
  return (
    <Container {...rest}>
      <TextInput ref={inputRef} placeholder="User name" />
    </Container>
  );
}
