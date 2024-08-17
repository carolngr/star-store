import { useState } from "react";
import { LayoutProps } from "styled-system";

import { Container, InputMask } from "./styles";

interface IInputMaskProps extends LayoutProps {
  placeholder: string;
}

export const Mask = ({ placeholder, ...rest }: IInputMaskProps) => {
  const [cep, setCep] = useState("");

  return (
    <Container {...rest}>
      <InputMask
        type={"zip-code"}
        value={cep}
        onChangeText={(text) => setCep(text)}
        placeholder={placeholder}
      />
    </Container>
  );
};
