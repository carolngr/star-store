import { View, Text } from "react-native";
import { Container, InfoArea, Photo, Price, Title } from "./styles";
import { Box } from "@components/atomos/Box";

import { Button } from "@components/molecules/Button";
import { IconWeight, Minus, Plus, Wallet } from "phosphor-react-native";
import { formatCurrency } from "src/util/formatCurrency";

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

const glyphMap = {
  plus: Plus,
  minus: Minus,
  wallet: Wallet,
};

type IconName = keyof typeof glyphMap;

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  weight: IconWeight;
}

export const Card = ({ onPress, item }: CardProps) => {
  return (
    <Box>
      <Photo>
        <Text>Imagem</Text>
      </Photo>
      <Title>{item.title}</Title>
      <InfoArea>
        <Price>{formatCurrency(item.price)}</Price>

        <Button.Icon
          name={"plus"}
          size={24}
          color={"#000"}
          weight={"fill"}
          onPress={() => onPress(item)}
        />
      </InfoArea>
    </Box>
  );
};
