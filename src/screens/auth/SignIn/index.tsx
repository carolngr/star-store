import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Toast from "react-native-toast-message";

import { Button } from "@components/molecules/Button";
import { Input } from "@components/molecules/Input";
import { Headers } from "@components/templates/Headers";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginProps, findCurrentUserData, login } from "@services/api/auth";
import { useAccessToken } from "@hooks/useAccessToken";
import { stories } from "@stores/index";

import { loginSchema } from "./settings";
import { Container } from "./styles";

export function SignIn() {
  const [loading, setLoading] = useState(false);
  const form = useForm<ILoginProps>({ resolver: yupResolver(loginSchema) });
  const setCurrentUserData = stories.useCurrentUserStore().setCurrentUserData;
  const handleSubmit = async (dataForm: ILoginProps) => {
    try {
      setLoading(true);
      const responseLogin = await login(dataForm);
      console.log(responseLogin);

      if (responseLogin.token) {
        await useAccessToken.setAccessToken({ token: responseLogin.token });
        const responseCurrentUserData = await findCurrentUserData();
        if (responseCurrentUserData) {
          setCurrentUserData(responseCurrentUserData);
          Toast.show({
            type: "success",
            text1: "Autênticação efetuada com sucesso!",
          });
        }
      }
    } catch (error) {
      console.log(error);
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
          type="SECONDARY"
          isLoading={loading}
        />
        <Button.Primary title="Cria uma conta" />
      </Container>
    </>
  );
}
