import { SafeAreaView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { Headers } from "@components/templates/Headers";
import { Button } from "@components/molecules/Button";
import { Quantity } from "@components/molecules/Quantity";
import { Photo } from "@components/atomos/Photo";
import { Box } from "@components/atomos/Box";

import { BlockInfo, Description, Price, Title } from "./styles";
import { stories } from "@stores/index";
import { useState } from "react";
import { formatCurrency } from "@utils/formatCurrency";
import { Content } from "@components/atomos/Content";
import { AppRoutes } from "@interfaces/entities/routes";
import { formatDate } from "@utils/formateDate";

export function DetailsItem() {
  const { params } = useRoute<RouteProp<AppRoutes, "detailsitem">>();
  const {
    title = "",
    id,
    price,
    seller,
    thumbnail_hd,
    created_at,
  } = params.item;

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
    appendProduct({ ...params.item, amount: quantity });
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
