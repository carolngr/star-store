import { Box } from "@components/atomos/Box";
import { OrderItem } from "@components/organisms/OrderItem";
import { Headers } from "@components/templates/Headers";
import { stories } from "@stores/index";
import { SafeAreaView, Text, View } from "react-native";
import { Container, Title, Total } from "./styles";
import { Icons } from "@components/atomos/Icons";
import { formatCurrency } from "@utils/formatCurrency";
import { Flex } from "@components/atomos/Flex";

export function Order() {
  const [selectedproducts, clearCart, calcPayment] = stories.useOrderStore(
    (state) => [state.selectedProducts, state.clearCart, state.calcPayment]
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Headers.Simple title="Pedidos" showBackButton />
      <Container>
        <Box>
          {selectedproducts.map((product) => (
            <OrderItem item={product} key={product.title} fixedAmount={true} />
          ))}
        </Box>
        <Box>
          <Flex marginBottom={18}>
            <Title>Pedido Confirmado!</Title>
            <Icons name="checkSquare" weight="fill" />
          </Flex>
          <Flex justifyContent={"space-between"}>
            <Text>Total</Text>
            <Total>{formatCurrency(calcPayment().totalValue)}</Total>
          </Flex>
        </Box>
      </Container>
    </SafeAreaView>
  );
}
