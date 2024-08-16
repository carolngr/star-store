import { SafeAreaView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { AppRoutes } from "@routes/botton-tabs.routes";

import { Headers } from "@components/templates/Headers";
import { Button } from "@components/molecules/Button";
import { Quantity } from "@components/molecules/Quantity";
import { Photo } from "@components/atomos/Photo";
import { Box } from "@components/atomos/Box";

import { BlockInfo, Description, Price, Title } from "./styles";
import { stories } from "@stores/index";
import { useState } from "react";
import { formatCurrency } from "src/util/formatCurrency";

export function DetailsItem() {
  const { params } = useRoute<RouteProp<AppRoutes, "detailsitem">>();
  const {
    title = "",
    date,
    id,
    price,
    seller,
    thumbnailHd,
    zipcode,
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
      <Box>
        <Photo />

        <BlockInfo>
          <Title>{title}</Title>
          <Description>Data: {date}</Description>
          <Description>Vendedor: {seller}</Description>
          <Description>Cep: {zipcode}</Description>
          <Price>{formatCurrency(price)}</Price>
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
    </SafeAreaView>
  );
}
