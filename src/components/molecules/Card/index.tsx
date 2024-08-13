import { View, Text } from "react-native";
import { Container, InfoArea, Photo, Price, Title } from "./styles";
import { IconPlus } from "@components/molecules/Button";
import { Box } from "@components/atomos/Box";

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
  onPress: (item: ICardProps) => void;
};

export const Card = ({ onPress, item }: CardProps) => {
  return (
    <Box>
      <Photo>
        <Text>Imagem</Text>
      </Photo>
      <Title>{item.title}</Title>
      <InfoArea>
        <Price>{item.price}</Price>
        <IconPlus onPress={() => onPress(item)} />
      </InfoArea>
    </Box>
  );
};
