import { Text, ScrollView, View, SafeAreaView } from "react-native";
import { stories } from "@stores/index";

import { Button } from "@components/molecules/Button";
import { PaymentInfoArea } from "@components/molecules/PaymentInfoArea";
import { ZipCode } from "@components/molecules/ZipCode";
import { Headers } from "@components/templates/Headers";
import { OrderItem } from "@components/organisms/OrderItem";

import { Container, EmptyCart, EmptyTitle } from "./styles";
import { Box } from "@components/atomos/Box";

export function CartShopping() {
  const [selectedproducts, clearCart, calcPayment] = stories.useOrderStore(
    (state) => [state.selectedProducts, state.clearCart, state.calcPayment]
  );

  const renderCartItems = () => {
    return (
      <>
        <Headers.TextButtonRow title="Carrinho" onPress={() => clearCart()} />
        <ScrollView>
          <Container>
            <Box>
              {selectedproducts.map((product) => (
                <OrderItem item={product} key={product.title} />
              ))}
            </Box>

            <ZipCode />
            <PaymentInfoArea
              subTotal={calcPayment().subTotalValue}
              valorFrete={calcPayment().freteValue}
              totalValue={calcPayment().totalValue}
            />
            <Button.Primary
              title="Ir para o pagamento"
              type="SECONDARY"
              onPress={() => console.log("teste")}
            />
          </Container>
        </ScrollView>
      </>
    );
  };

  const renderEmptyCartMessage = () => {
    return (
      <>
        <Headers.Simple title="Carrinho" showBackButton />
        <EmptyCart>
          <EmptyTitle>Seu carrinho está vazio</EmptyTitle>
        </EmptyCart>
      </>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {selectedproducts.length > 0
        ? renderCartItems()
        : renderEmptyCartMessage()}
    </SafeAreaView>
  );
}
