import React from "react";
import { View } from "react-native";
import { useForm } from "react-hook-form";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { yupResolver } from "@hookform/resolvers/yup";

import { CredCart } from "@interfaces/entities/credCart";
import { Input } from "@components/molecules/Input";
import { Button } from "@components/molecules/Button";
import { Box } from "@components/atomos/Box";
import { Form } from "./styles";
import { cartSchema } from "./settings";
import { useQueryClient } from "@tanstack/react-query";
import { createCart } from "@services/api/cart";

export const CartForm = () => {
  const form = useForm<CredCart>({ resolver: yupResolver(cartSchema) as any });
  const queryClient = useQueryClient();

  const handleSubmit = async (dataForm: CredCart) => {
    try {
      dataForm.main_card = true;
      const bodyArgs = {
        number: dataForm.number,
        title: dataForm.title,
        cvv: dataForm.cvv,
        main_card: true,
        valid_date: dataForm.valid_date,
      };
      await createCart(bodyArgs);
      queryClient.invalidateQueries({ queryKey: ["list-carts"] });
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
    }
  };
  return (
    <Box>
      <View>
        <Form>
          <Input.Text form={form} name="title" placeholder="Nome do titular" />

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
  );
};
