import { SafeAreaView } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { AppNavigatorRoutesProps, AppRoutes } from "@routes/botton-tabs.routes";

import { Headers } from "@components/templates/Headers";
import { Button } from "@components/molecules/Button";
import { Quantity } from "@components/molecules/Quantity";
import { Photo } from "@components/atomos/Photo";
import { Box } from "@components/atomos/Box";

import { BlockInfo, Description, Price, Title } from "./styles";

export function DetailsItem() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
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
          <Price>{price}</Price>
          <Quantity />
          <Button.Primary title="Adicionar ao carrinho" type="SECONDARY" />
        </BlockInfo>
      </Box>
    </SafeAreaView>
  );
}
