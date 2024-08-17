import { View, Text } from "react-native";

import { Box } from "@components/atomos/Box";
import { Photo } from "@components/atomos/Photo";
import { Quantity } from "@components/molecules/Quantity";
import { Button } from "@components/molecules/Button";

import { stories } from "@stores/index";
import { Product } from "@stores/reducers/types";
import { formatCurrency } from "src/util/formatCurrency";

import { Container, Details, Price, Title, BoxBottom, BoxTop } from "./styles";

type CardProps = {
  item: Product;
};

export const OrderItem = ({ item }: CardProps) => {
  const [increment, decrement] = stories.useOrderStore((state) => [
    state.increment,
    state.decrement,
  ]);

  return (
    <Container>
      <Photo />
      <Details>
        <BoxTop>
          <Title>{item.title}</Title>
          <Price>{formatCurrency(item.price)}</Price>
        </BoxTop>

        <BoxBottom>
          <Text>Vendedor: {item.seller}</Text>
          <Text>Cep: {item.zipcode}</Text>
          <Quantity
            decrement={() => decrement(item)}
            increment={() => increment(item)}
            quantity={item.amount}
          />
        </BoxBottom>
      </Details>
    </Container>
  );
};
