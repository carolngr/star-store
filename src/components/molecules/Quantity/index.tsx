import { Minus, Plus } from "phosphor-react-native";
import { Add, Container, Decrement, QuantityNumber } from "./styles";
import { useState } from "react";

export const Quantity = () => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <Container>
      <Decrement onPress={handleDecrement}>
        <Minus size={14} />
      </Decrement>

      <QuantityNumber>{quantity}</QuantityNumber>

      <Add onPress={handleIncrement}>
        <Plus size={14} />
      </Add>
    </Container>
  );
};
