import { Box } from "@components/atomos/Box";
import { View, Text } from "react-native";
import { BoxInformation, Container, Title, TotalPrice } from "./styles";
import { Divider } from "@components/atomos/Divider";

export const PaymentInfoArea = () => {
  return (
    <Container>
      <BoxInformation>
        <Title>Subtotal</Title>
        <Text>R$ 199,00</Text>
      </BoxInformation>
      <BoxInformation>
        <Title>Frete</Title>
        <Text>R$ 29,00</Text>
      </BoxInformation>
      <Divider />
      <BoxInformation>
        <Title>Total</Title>
        <TotalPrice>R$ 427,00</TotalPrice>
      </BoxInformation>
    </Container>
  );
};
