import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Button } from "@components/molecules/Button";
import { Input } from "@components/molecules/Input";

import { PaymentInfoArea } from "@components/molecules/PaymentInfoArea";
import { InfoBlock } from "@components/molecules/InfoBlock";

import { Icons } from "@components/atomos/Icons";
import { Box } from "@components/atomos/Box";

import { Headers } from "@components/templates/Headers";

import { useForm } from "react-hook-form";
import { stories } from "@stores/index";
import { useModal } from "@stores/context/useModal";
import { cartSchema } from "./settings";
import { yupResolver } from "@hookform/resolvers/yup";
import Toast from "react-native-toast-message";

import { cart } from "@services/api/Cart";
import { useCarts } from "@services/api/Cart/useCarts";

import { Container, Form, ListCard, Option, PaymentOptions } from "./styles";
import { CredCart } from "@interfaces/entities/credCart";
import { CredCarts } from "@components/molecules/CredCarts";
import { Content } from "@components/atomos/Content";

export function Payment() {
  const [loading, setLoading] = useState(false);
  const { closeModal } = useModal();
  const { openModal } = useModal();
  const { data = [] } = useCarts();
  const form = useForm<CredCart>({ resolver: yupResolver(cartSchema) as any });

  const [datacard, setDataCard] = useState<CredCart>({} as CredCart);

  const [items, calcPayment, address] = stories.useOrderStore((state) => [
    state.selectedProducts,
    state.calcPayment,
    state.address,
  ]);

  const formatAddress = () => {
    return `${address?.logradouro}, ${12312} ${address?.bairro}, ${
      address?.localidade
    } / ${address?.uf}`;
  };

  const handleSubmit = async (dataForm: CredCart) => {
    try {
      dataForm.main_card = true;
      setLoading(true);
      const responseCart = await cart(dataForm);
      Toast.show({
        type: "success",
        text1: "Cadastro efetuado com sucesso!",
      });
    } catch (error) {
      Toast.show({
        type: "error",
        text1: String(error),
      });
    } finally {
      setLoading(false);
    }
  };

  const newCart = () => {
    openModal({
      body: (
        <Box>
          <View>
            <Form>
              <Input.Text
                form={form}
                name="title"
                placeholder="Nome do titular"
              />

              <Input.Mask
                form={form}
                name="number"
                type="credit-card"
                placeholder="Número do cartão de crédito"
                keyboardType="numeric"
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  gap: 10,
                }}
              >
                <Input.Mask
                  form={form}
                  name="valid_date"
                  containerProps={{ width: "50%" }}
                  type="custom"
                  options={{ mask: "99/99" }}
                  placeholder="Validade"
                />

                <Input.Text
                  form={form}
                  name="cvv"
                  containerProps={{ width: "100%" }}
                  placeholder="CVV"
                  keyboardType="numeric"
                  maxLength={3}
                />
              </View>

              <Button.Primary
                title="Cadastrar"
                type="SECONDARY"
                onPress={form.handleSubmit(handleSubmit)}
              />
            </Form>
          </View>
        </Box>
      ),
    });
  };

  const handleCredCart = (data: CredCart) => {
    setDataCard(data);
    closeModal();
  };

  const handleDonePaymente = () => {
    const data = Object.values(datacard);

    if (data.length === 0)
      return Toast.show({
        type: "error",
        text1: "Necessário selecionar um cartão",
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
                onPress={() => handleCredCart(item)}
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
        <CredCarts item={datacard} />

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
          onPress={() => handleDonePaymente()}
        />
      </Container>
    </SafeAreaView>
  );
}
