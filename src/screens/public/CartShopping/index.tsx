import { stories } from "@stores/index";
import { SafeAreaView, ScrollView } from "react-native";

import { Button } from "@components/molecules/Button";
import { PaymentInfoArea } from "@components/molecules/PaymentInfoArea";
import { ZipCode } from "@components/molecules/ZipCode";
import { OrderItem } from "@components/organisms/OrderItem";
import { Headers } from "@components/templates/Headers";

import { Box } from "@components/atomos/Box";
import { useFindAddressByCEP } from "@services/externalApi/viaCEP/useViaCep";
import { Container, EmptyCart, EmptyTitle } from "./styles";
import { useAccessTokenValidation } from "@hooks/useAccessToken";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/botton-tabs.routes";

export function CartShopping() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const [selectedproducts, clearCart, calcPayment, appendAddress] =
    stories.useOrderStore((state) => [
      state.selectedProducts,
      state.clearCart,
      state.calcPayment,
      state.appendAddress,
    ]);
  const { currentUser } = stories.useCurrentUserStore();

  const { mutate } = useFindAddressByCEP();

  const onChangeZipCode = (text: string) => {
    if (text.length === 9) {
      const substrText = text.replace("-", "");
      mutate(substrText, { onSuccess: (address) => appendAddress(address) });
    }
  };

  const renderCartItems = () => {
    return (
      <>
        <Headers.TextButtonRow title="Carrinho" onPress={() => clearCart()} />
        <ScrollView>
          <Container>
            <Box>
              {selectedproducts.map((product) => (
                <OrderItem item={product} key={product.id} />
              ))}
            </Box>

            <ZipCode onChange={onChangeZipCode} />
            <PaymentInfoArea
              subTotal={calcPayment().subTotalValue}
              valorFrete={calcPayment().freteValue}
              totalValue={calcPayment().totalValue}
            />
            {currentUser ? (
              <Button.Primary
                title="Ir para o pagamento"
                type="SECONDARY"
                onPress={() => navigation.navigate("payment")}
              />
            ) : (
              <Button.Primary
                title="Realizar login"
                type="PRIMARY"
                onPress={() => navigation.navigate("auth")}
              />
            )}
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
