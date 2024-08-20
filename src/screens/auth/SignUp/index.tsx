import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Toast from "react-native-toast-message";

import { Button } from "@components/molecules/Button";
import { Input } from "@components/molecules/Input";
import { Headers } from "@components/templates/Headers";
import { yupResolver } from "@hookform/resolvers/yup";
import { IRegisterProps, register } from "@services/api/auth";

import { useAuthenticate } from "@hooks/useAuhenticate";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/botton-tabs.routes";
import { registrationSchema } from "./settings";
import { Container } from "./styles";

export function SignUp() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const form = useForm<IRegisterProps>({
    resolver: yupResolver(registrationSchema),
  });

  const { auth } = useAuthenticate();

  const handleSubmit = async (dataForm: IRegisterProps) => {
    try {
      setLoading(true);
      const responseRegister = await register(dataForm);
      auth(responseRegister.token);
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
      <Headers.Simple title="Criar conta" />
      <Container>
        <Input.Text
          form={form}
          name="name"
          placeholder="Nome"
          autoCapitalize="none"
        />
        <Input.Text
          form={form}
          name="email"
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input.PasswordInput form={form} name="password" placeholder="Senha" />
        <Button.Primary
          title="Realizar cadastro"
          onPress={form.handleSubmit(handleSubmit)}
          isLoading={loading}
        />
        <Button.Primary
          title="Já tenho login"
          type="SECONDARY"
          onPress={() => navigation.navigate("signIn")}
        />
      </Container>
    </>
  );
}
