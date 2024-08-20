import { View } from "react-native";

import { CredCart } from "@interfaces/entities/credCart";
import { Cart, Description, NumberCart, TitleName } from "./styles";

export interface ICartProps {
  id: number;
  title: string;
  number: string;
  valid_date: string;
  cvv: number;
}

type CartProps = {
  item: CredCart;
};

export const CredCarts = ({ item }: CartProps) => {
  return (
    <Cart>
      <TitleName>{item?.title}</TitleName>
      <View>
        <Description>Validade</Description>
        <Description>{item?.valid_date}</Description>
      </View>
      <NumberCart>
        <View>
          <Description>Número</Description>
          <Description>{item?.number}</Description>
        </View>
        <View>
          <Description>CVV</Description>
          <Description>{item?.cvv}</Description>
        </View>
      </NumberCart>
    </Cart>
  );
};
