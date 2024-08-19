import { Box } from "@components/atomos/Box";
import { View, Text } from "react-native";
import { BoxInformation, Container, Title, TotalPrice } from "./styles";
import { Divider } from "@components/atomos/Divider";
import { useOrderStore } from "@stores/reducers";
import { formatCurrency } from "@utils/formatCurrency";

type ValoresProps = {
  subTotal: number;
  valorFrete: number;
  totalValue: number;
};

export const PaymentInfoArea = ({
  subTotal,
  valorFrete,
  totalValue,
}: ValoresProps) => {
  return (
    <Container>
      <BoxInformation>
        <Title>Subtotal</Title>
        <Text>{formatCurrency(subTotal)}</Text>
      </BoxInformation>
      <BoxInformation>
        <Title>Frete</Title>
        <Text>{formatCurrency(valorFrete)}</Text>
      </BoxInformation>
      <Divider />
      <BoxInformation>
        <Title>Total</Title>
        <TotalPrice>{formatCurrency(totalValue)}</TotalPrice>
      </BoxInformation>
    </Container>
  );
};
