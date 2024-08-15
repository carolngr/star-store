import { Text, ScrollView, View } from "react-native";
import { stories } from "@stores/index";

import { Button } from "@components/molecules/Button";
import { PaymentInfoArea } from "@components/molecules/PaymentInfoArea";
import { ZipCode } from "@components/molecules/ZipCode";
import { Headers } from "@components/templates/Headers";
import { OrderItem } from "@components/organisms/OrderItem";

import { Container, EmptyCart, EmptyTitle } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export function CartShopping() {
  const [selectedproducts, clearCart] = stories.useOrderStore((state) => [
    state.selectedProducts,
    state.clearCart,
  ]);

  const renderCartItems = () => {
    return (
      <>
        <Headers.TextButtonRow title="Carrinho" onPress={() => clearCart()} />
        <ScrollView>
          <Container>
            {selectedproducts.map((product) => (
              <OrderItem item={product} key={product.title} />
            ))}

            <ZipCode />
            <PaymentInfoArea />
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
