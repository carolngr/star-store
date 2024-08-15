import { Box } from "@components/atomos/Box";
import { View, Text } from "react-native";
import { BoxInformation, Container, Title, TotalPrice } from "./styles";
import { Divider } from "@components/atomos/Divider";
import { useOrderStore } from "@stores/reducers";
import { formatCurrency } from "src/util/formatCurrency";

export const PaymentInfoArea = () => {
  const items = useOrderStore((state) => state.selectedProducts);

  const subTotal = items.reduce(
    (acc, item) => acc + item.price * item.amount,
    0
  );

  return (
    <Container>
      <BoxInformation>
        <Title>Subtotal</Title>
        <Text>{formatCurrency(subTotal)}</Text>
      </BoxInformation>
      <BoxInformation>
        <Title>Frete</Title>
        <Text>R$ 29,00</Text>
      </BoxInformation>
      <Divider />
      <BoxInformation>
        <Title>Total</Title>
        <TotalPrice>{formatCurrency(subTotal)}</TotalPrice>
      </BoxInformation>
    </Container>
  );
};
