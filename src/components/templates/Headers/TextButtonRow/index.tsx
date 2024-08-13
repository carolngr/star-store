import { Text, TouchableOpacity } from "react-native";

import { Container, Title } from "./styles";
import { Button } from "@components/molecules/Button";

type Props = {
  title: string;
};

export function TextButtonRow({ title }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Button.Primary title="Limpar carrinho" type="SECONDARY" />
    </Container>
  );
}
