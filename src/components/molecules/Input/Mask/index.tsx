import { useState } from "react";
import { LayoutProps } from "styled-system";

import { Container } from "./styles";
import { TextInputMask, TextInputMaskProps } from "react-native-masked-text";

interface IInputMaskProps extends TextInputMaskProps {
  containerProps?: LayoutProps;
  placeholder: string;
}

export const Mask = ({
  containerProps,
  placeholder,
  type,
  ...rest
}: IInputMaskProps) => {
  const [cep, setCep] = useState("");

  return (
    <>
      <Container {...containerProps}>
        <TextInputMask
          type={type}
          value={cep}
          placeholder={placeholder}
          {...rest}
          onChangeText={(text) => {
            setCep(text);
            rest.onChangeText?.(text);
          }}
        />
      </Container>
    </>
  );
};
