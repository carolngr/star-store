import { Text, TouchableOpacity } from "react-native";

import { Container, Title } from "./styles";
import { Button } from "@components/molecules/Button";

type Props = {
  title: string;
  onPress: () => void;
};

export function TextButtonRow({ title, onPress }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Button.Primary
        title="Limpar carrinho"
        type="SECONDARY"
        onPress={() => onPress()}
      />
    </Container>
  );
}
