import { View, Text } from "react-native";

import { Box } from "@components/atomos/Box";
import { Photo } from "@components/atomos/Photo";
import { Quantity } from "@components/molecules/Quantity";
import { Button } from "@components/molecules/Button";

import { Container, Details, Price, Title, BoxBottom, BoxTop } from "./styles";

export interface ICardProps {
  id: number;
  title: string;
  price: number;
  zipcode: string;
  seller: string;
  thumbnailHd: string;
  date: string;
}

type CardProps = {
  item: ICardProps;
};

export const OrderItem = ({ item }: CardProps) => {
  return (
    <Container>
      <Photo />
      <Details>
        <BoxTop>
          <Title>{item.title}</Title>
          <Price>{item.price}</Price>
        </BoxTop>

        <BoxBottom>
          <Text>Vendedor: {item.seller}</Text>
          <Text>Cep: {item.zipcode}</Text>
          <Quantity />
        </BoxBottom>
      </Details>
    </Container>
  );
};
