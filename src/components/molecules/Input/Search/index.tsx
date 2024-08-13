import React from "react";
import { TextInput, View, Text, TextInputProps } from "react-native";
import { Container, Icon, Input } from "./styles";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

export function Search({ inputRef, ...rest }: Props) {
  return (
    <Container>
      <Icon />
      <Input ref={inputRef} placeholder="User name" {...rest} />
    </Container>
  );
}
