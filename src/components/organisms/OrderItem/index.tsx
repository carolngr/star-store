import { View, Text } from "react-native";

import { Box } from "@components/atomos/Box";
import { Photo } from "@components/atomos/Photo";
import { Quantity } from "@components/molecules/Quantity";
import { Button } from "@components/molecules/Button";

import { stories } from "@stores/index";
import { Product } from "@stores/reducers/types";
import { formatCurrency } from "src/util/formatCurrency";

import { Container, Details, Price, Title, BoxBottom, BoxTop } from "./styles";

type OrdemProps = {
  item: Product;
  fixedAmount?: boolean;
};

export const OrderItem = ({ item, fixedAmount }: OrdemProps) => {
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
          {fixedAmount ? (
            <>
              <Text>Quantidade</Text>
              <Text>{item.amount}</Text>
            </>
          ) : (
            <Quantity
              decrement={() => decrement(item)}
              increment={() => increment(item)}
              quantity={item.amount}
            />
          )}
        </BoxBottom>
      </Details>
    </Container>
  );
};
