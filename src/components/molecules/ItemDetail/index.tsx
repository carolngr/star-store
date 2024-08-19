import React, { useState } from "react";

import { Box } from "@components/atomos/Box";
import { Photo } from "@components/atomos/Photo";
import { Item } from "@interfaces/entities/item";
import { BlockInfo, Description } from "@screens/public/DetailsItem/styles";
import { stories } from "@stores/index";
import { formatCurrency } from "@utils/formatCurrency";
import { formatDate } from "@utils/formateDate";

import { Button } from "../Button";
import { Price } from "../Card/styles";
import { Title } from "../PaymentInfoArea/styles";
import { Quantity } from "../Quantity";

interface IItemDetailProps {
  item: Item;
  onSuccess: () => void;
}

const ItemDetail = ({ item, onSuccess }: IItemDetailProps) => {
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
    const appendSuccess = appendProduct({ ...item, amount: quantity });
    if (appendSuccess) onSuccess();
  };

  return (
    <Box>
      <Photo src={item.thumbnail_hd} />

      <BlockInfo>
        <Title>{item.title}</Title>
        <Description>Data: {formatDate(item.created_at)}</Description>
        <Description>Vendedor: {item.seller}</Description>
        <Price>{formatCurrency(Number(item.price))}</Price>
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
  );
};

export default ItemDetail;
