import { Minus, Plus, Wallet } from "phosphor-react-native";

import { Box } from "@components/atomos/Box";
import { Button } from "@components/molecules/Button";
import { InfoArea, Price, Title } from "./styles";
import { formatCurrency } from "@utils/formatCurrency";
import { Item } from "src/interfaces/entities/item";
import { Photo } from "@components/atomos/Photo";

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
  item: Item;
  onPress: (item: Item) => void;
};

const glyphMap = {
  plus: Plus,
  minus: Minus,
  wallet: Wallet,
};

export const Card = ({ onPress, item }: CardProps) => {
  return (
    <Box flex={1}>
      <Photo src={item.thumbnail_hd} />
      <Title>{item.title}</Title>
      <InfoArea>
        <Price>{formatCurrency(Number(item.price))}</Price>
        <Button.Icon
          name={"plus"}
          size={24}
          color={"#000"}
          weight="fill"
          onPress={() => onPress(item)}
          TitleButton=""
        />
      </InfoArea>
    </Box>
  );
};
