import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

import { Box } from "@components/atomos/Box";
import { Photo } from "@components/atomos/Photo";
import { Button } from "@components/molecules/Button";
import { Quantity } from "@components/molecules/Quantity";
import { Headers } from "@components/templates/Headers";

import { Content } from "@components/atomos/Content";
import { AppRoutes } from "@interfaces/entities/routes";
import { AppNavigatorRoutesProps } from "@routes/botton-tabs.routes";
import { stories } from "@stores/index";
import { formatCurrency } from "@utils/formatCurrency";
import { formatDate } from "@utils/formateDate";
import { useState } from "react";
import { BlockInfo, Description, Price, Title } from "./styles";

export function DetailsItem() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const { params } = useRoute<RouteProp<AppRoutes, "detailsitem">>();
  const { title = "", price, seller, thumbnail_hd, created_at } = params.item;

  const [quantity, setQuantity] = useState(1);

  const [appendProduct] = stories.useOrderStore((state) => [
    state.appendProduct,
  ]);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const appendToCart = () => {
    const successAppendProduct = appendProduct({
      ...params.item,
      amount: quantity,
    });
    if (successAppendProduct) {
      navigation.navigate("cartshopping");
    }
  };

  return (
    <SafeAreaView>
      <Headers.Simple title="Detalhes" showBackButton />
      <Content>
        <Box>
          <Photo src={thumbnail_hd} />

          <BlockInfo>
            <Title>{title}</Title>
            <Description>Data: {formatDate(created_at)}</Description>
            <Description>Vendedor: {seller}</Description>
            <Price>{formatCurrency(Number(price))}</Price>
            <Quantity
              decrement={() => handleDecrement()}
              increment={() => handleIncrement()}
              quantity={quantity}
            />
            <Button.Primary
              title="Adicionar ao carrinho"
              type="SECONDARY"
              onPress={() => appendToCart()}
            />
          </BlockInfo>
        </Box>
      </Content>
    </SafeAreaView>
  );
}
