import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Toast from "react-native-toast-message";

import { Button } from "@components/molecules/Button";
import { Input } from "@components/molecules/Input";
import { Headers } from "@components/templates/Headers";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  IRegisterProps,
  findCurrentUserData,
  login,
  register,
} from "@services/api/auth";
import { useAccessToken } from "@hooks/useAccessToken";
import { stories } from "@stores/index";

import { registrationSchema } from "./settings";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/botton-tabs.routes";

export function SignUp() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const [loading, setLoading] = useState(false);
  const form = useForm<IRegisterProps>({
    resolver: yupResolver(registrationSchema),
  });
  const setCurrentUserData = stories.useCurrentUserStore().setCurrentUserData;
  const handleSubmit = async (dataForm: IRegisterProps) => {
    try {
      setLoading(true);
      const responseLogin = await register(dataForm);
      if (responseLogin.token) {
        await useAccessToken.setAccessToken({ token: responseLogin.token });
        const responseCurrentUserData = await findCurrentUserData();
        if (responseCurrentUserData) {
          setCurrentUserData(responseCurrentUserData);
          Toast.show({
            type: "success",
            text1: "Cadastro efetuado com sucesso!",
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
          onPress={form.handleSubmit(handleSubmit, (err) => console.log(err))}
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
