import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/botton-tabs.routes";

import { useCreateOrder } from "@services/api/orders/useOrders";
import { Button } from "@components/molecules/Button";
import { InfoBlock } from "@components/molecules/InfoBlock";
import { PaymentInfoArea } from "@components/molecules/PaymentInfoArea";
import { Icons } from "@components/atomos/Icons";
import { Headers } from "@components/templates/Headers";
import { useModal } from "@stores/context/useModal";
import { stories } from "@stores/index";
import { useCarts } from "@services/api/cart/useCarts";
import { Content } from "@components/atomos/Content";
import { CredCarts } from "@components/molecules/CredCarts";
import { CredCart } from "@interfaces/entities/credCart";
import { ICreateOrderProps } from "@services/api/orders";

import { CartForm } from "./CartForm";
import { Container, ListCard, Option, PaymentOptions } from "./styles";

export function Payment() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const { closeModal } = useModal();
  const { openModal } = useModal();
  const { data = [] } = useCarts();

  const [dataCard, setDataCard] = useState<CredCart>({} as CredCart);

  const [calcPayment, address, items, clearCart] = stories.useOrderStore(
    (state) => [
      state.calcPayment,
      state.address,
      state.selectedProducts,
      state.clearCart,
    ]
  );

  const formatAddress = () => {
    return `${address?.logradouro}, ${12312} ${address?.bairro}, ${
      address?.localidade
    } / ${address?.uf}`;
  };

  const newCart = () => {
    openModal({
      body: <CartForm />,
    });
  };

  const handleCredCart = (data: CredCart) => {
    setDataCard(data);
    closeModal();
  };

  const { mutateAsync, isPending } = useCreateOrder();

  const handleDonePaymente = () => {
    const data = Object.values(dataCard);
    if (data.length === 0 && !address) {
      return Toast.show({
        type: "error",
        text1: "Necessário selecionar um cartão",
      });
    }
    const bodyArgs: ICreateOrderProps = {
      card: {
        cvv: dataCard.cvv,
        main_card: dataCard.main_card,
        number: dataCard.number,
        title: dataCard.title,
        valid_date: dataCard.valid_date,
      },
      address: {
        city: address?.localidade ?? "Cidade",
        country: "Brazil",
        postal_code: address?.cep ?? "12312312",
        state: address?.uf ?? "Estado",
        street: address?.logradouro ?? "Rua",
      },
      shipping_value: 40,
      status: "pending",
      items: items.map((item) => ({
        item_id: item.id,
        price: Number(item.price),
        quantity: item.amount,
      })),
    };
    mutateAsync(bodyArgs, {
      onSuccess: () => {
        Toast.show({
          type: "success",
          text1: "Pedido efetivado com sucesso!",
        });
        clearCart();
        navigation.navigate("profileOrderHistory");
      },
    });
  };

  const listCart = () => {
    openModal({
      body: (
        <Content>
          <FlatList
            data={data}
            key={"_"}
            numColumns={1}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => handleCredCart(item as any)}
              >
                <View>
                  <ListCard>
                    <Text>{item.title}</Text>
                    <Text>{item.number}</Text>
                    <Icons name="caretRight" weight="regular" />
                  </ListCard>
                </View>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          />
        </Content>
      ),
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Headers.Simple title="Pagamento" showBackButton />
      <Container>
        <CredCarts item={dataCard} />

        <PaymentOptions>
          <Option>
            <Button.Icon
              name="plus"
              weight="fill"
              size={24}
              onPress={() => newCart()}
              TitleButton="Cadastrar cartão"
            />
          </Option>
          <Option>
            <Button.Icon
              name="wallet"
              weight="fill"
              size={24}
              TitleButton="Trocar cartão"
              onPress={() => listCart()}
            />
          </Option>
        </PaymentOptions>
        <InfoBlock title="Endereço" description={formatAddress()} />
        <PaymentInfoArea
          subTotal={calcPayment().subTotalValue}
          valorFrete={calcPayment().freteValue}
          totalValue={calcPayment().totalValue}
        />
        <Button.Primary
          title="Confirmar pagamento"
          type="SECONDARY"
          isLoading={isPending}
          onPress={() => handleDonePaymente()}
        />
      </Container>
    </SafeAreaView>
  );
}
