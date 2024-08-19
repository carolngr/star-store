import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/molecules/Button";
import { Input } from "@components/molecules/Input";
import { Headers } from "@components/templates/Headers";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginProps, findCurrentUserData, login } from "@services/api/auth";
import { useAccessToken } from "@hooks/useAccessToken";
import { stories } from "@stores/index";
import { AppNavigatorRoutesProps } from "@routes/botton-tabs.routes";

import { loginSchema } from "./settings";
import { Container } from "./styles";

export function SignIn() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const [loading, setLoading] = useState(false);
  const form = useForm<ILoginProps>({ resolver: yupResolver(loginSchema) });

  const setCurrentUserData = stories.useCurrentUserStore().setCurrentUserData;

  const handleSubmit = async (dataForm: ILoginProps) => {
    try {
      setLoading(true);
      const responseLogin = await login(dataForm);
      if (responseLogin.token) {
        await useAccessToken.setAccessToken({ token: responseLogin.token });
        const responseCurrentUserData = await findCurrentUserData();
        if (responseCurrentUserData) {
          setCurrentUserData(responseCurrentUserData);
          Toast.show({
            type: "success",
            text1: "Login efetuado com sucesso!",
          });
        }
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: String(error),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Headers.Simple title="Login" />
      <Container>
        <Input.Text
          form={form}
          name="email"
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input.Text form={form} name="password" placeholder="Senha" />
        <Button.Primary
          title="Fazer login"
          onPress={form.handleSubmit(handleSubmit)}
          isLoading={loading}
        />
        <Button.Primary
          title="Cria uma conta"
          type="SECONDARY"
          onPress={() => navigation.navigate("signUp")}
        />
      </Container>
    </>
  );
}
