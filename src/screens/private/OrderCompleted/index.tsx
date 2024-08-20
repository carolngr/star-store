import { Box } from "@components/atomos/Box";
import { OrderItem } from "@components/organisms/OrderItem";
import { Headers } from "@components/templates/Headers";
import { stories } from "@stores/index";
import { SafeAreaView, Text, View } from "react-native";
import { Container, Title, Total } from "./styles";
import { Icons } from "@components/atomos/Icons";
import { formatCurrency } from "@utils/formatCurrency";
import { Flex } from "@components/atomos/Flex";
import { RouteProp, useRoute } from "@react-navigation/native";
import { AppRoutes } from "@interfaces/entities/routes";

export function OrderCompleted() {
  const { params } = useRoute<RouteProp<AppRoutes, "orderCompleted">>();
  const order = params.order;

  const sub_total_value = order.items.reduce((preview, current) => {
    return Math.min(Number(current.price) * current.quantity) + preview;
  }, 0);
  const total_value = sub_total_value + order.shipping_value;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Headers.Simple title={`Pedido: #${order.order_code}`} showBackButton />
      <Container>
        <Box>
          {order.items.map((product, index) => (
            <OrderItem
              item={product}
              key={product.id + index}
              fixedAmount={true}
            />
          ))}
        </Box>
        <Box>
          <Flex marginBottom={18}>
            <Title>Pedido Confirmado!</Title>
            <Icons name="checkSquare" weight="fill" />
          </Flex>
          <Flex justifyContent={"space-between"}>
            <Text>Total</Text>
            <Total>{formatCurrency(total_value)}</Total>
          </Flex>
        </Box>
      </Container>
    </SafeAreaView>
  );
}
