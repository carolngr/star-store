import { Minus, Plus } from "phosphor-react-native";
import { Add, Container, Decrement, QuantityNumber } from "./styles";
import { useState } from "react";

type Props = {
  increment: () => void;
  decrement: () => void;
  quantity: number;
};

export const Quantity = ({ increment, decrement, quantity }: Props) => {
  return (
    <Container>
      <Decrement onPress={() => decrement()}>
        <Minus size={14} />
      </Decrement>

      <QuantityNumber>{quantity}</QuantityNumber>

      <Add onPress={() => increment()}>
        <Plus size={14} />
      </Add>
    </Container>
  );
};
