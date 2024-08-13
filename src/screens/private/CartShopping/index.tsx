import { Button } from "@components/molecules/Button";
import { OrderItem } from "@components/molecules/OrderItem";
import { PaymentInfoArea } from "@components/molecules/PaymentInfoArea";
import { ZipCode } from "@components/molecules/ZipCode";
import { Headers } from "@components/templates/Headers";
import { View, Text, ScrollView } from "react-native";
import { Container } from "./styles";

const itemDetails = {
  id: 1,
  title: "Blusa do Imperio",
  price: 7990,
  zipcode: "78993-000",
  seller: "Jo\u00e3o da Silva",
  thumbnailHd:
    "https://cdn.awsli.com.br/600x450/21/21351/produto/3853007/f66e8c63ab.jpg",
  date: "26/11/2015",
};

export function CartShopping() {
  return (
    <ScrollView>
      <Headers.TextButtonRow title="Carrinho" />

      <Container>
        <OrderItem item={itemDetails} />
        <ZipCode />
        <PaymentInfoArea />
        <Button.Primary title="Ir para o pagamento" type="SECONDARY" />
      </Container>
    </ScrollView>
  );
}
