import { TouchableOpacity } from "react-native";

import { Box } from "@components/atomos/Box";
import { Photo } from "@components/atomos/Photo";
import { Button } from "@components/molecules/Button";
import { useModal } from "@stores/context/useModal";
import { formatCurrency } from "@utils/formatCurrency";
import { Item } from "@interfaces/entities/item";

import ItemDetail from "../ItemDetail";
import { InfoArea, Price, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/botton-tabs.routes";

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

export const Card = ({ onPress, item }: CardProps) => {
  const { closeModal } = useModal();
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const { openModal } = useModal();

  const appendProduct = () => {
    closeModal();
    navigation.navigate("cartshopping");
  };

  const showDetails = () => {
    openModal({
      body: <ItemDetail item={item} onSuccess={appendProduct} />,
    });
  };

  return (
    <TouchableOpacity onPress={showDetails}>
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
    </TouchableOpacity>
  );
};
