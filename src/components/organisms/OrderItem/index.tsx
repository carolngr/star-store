import { Text, View } from "react-native";

import { Photo } from "@components/atomos/Photo";
import { Quantity } from "@components/molecules/Quantity";

import { stories } from "@stores/index";
import { Product } from "@stores/reducers/types";
import { formatCurrency } from "@utils/formatCurrency";

import { BoxBottom, BoxTop, Container, Details, Price, Title } from "./styles";

type OrdemProps = {
  item: Product;
  fixedAmount?: boolean;
};

export const OrderItem = ({ item, fixedAmount }: OrdemProps) => {
  const [increment, decrement, remove] = stories.useOrderStore((state) => [
    state.increment,
    state.decrement,
    state.removeProductCart,
  ]);

  const decrementItem = () => {
    if (item.amount <= 1) {
      remove(item.id);
    } else {
      decrement(item);
    }
  };

  return (
    <Container>
      <View style={{ width: "40%" }}>
        <Photo src={item.thumbnail_hd} />
      </View>
      <Details>
        <BoxTop>
          <Title>{item.title}</Title>
          <Price>{formatCurrency(Number(item.price))}</Price>
        </BoxTop>

        <BoxBottom>
          <Text>Vendedor: {item.seller}</Text>
          {fixedAmount ? (
            <>
              <Text>Quantidade</Text>
              <Text>{item.amount}</Text>
            </>
          ) : (
            <Quantity
              decrement={() => decrementItem()}
              increment={() => increment(item)}
              quantity={item.amount}
            />
          )}
        </BoxBottom>
      </Details>
    </Container>
  );
};
