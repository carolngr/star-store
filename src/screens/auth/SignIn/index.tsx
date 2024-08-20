import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Toast from "react-native-toast-message";

import { Button } from "@components/molecules/Button";
import { Input } from "@components/molecules/Input";
import { Headers } from "@components/templates/Headers";
import { yupResolver } from "@hookform/resolvers/yup";
import { AppNavigatorRoutesProps } from "@routes/botton-tabs.routes";
import { ILoginProps, login } from "@services/api/auth";

import { useAuthenticate } from "@hooks/useAuhenticate";
import { loginSchema } from "./settings";
import { Container } from "./styles";

export function SignIn() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const form = useForm<ILoginProps>({ resolver: yupResolver(loginSchema) });
  const { auth } = useAuthenticate();

  const handleSubmit = async (dataForm: ILoginProps) => {
    try {
      setLoading(true);
      const responseLogin = await login(dataForm);
      await auth(responseLogin.token);
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
        <Input.PasswordInput form={form} name="password" placeholder="Senha" />
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
