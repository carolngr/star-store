import React from "react";
import { useForm } from "react-hook-form";
import Toast from "react-native-toast-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@components/molecules/Button";
import { Input } from "@components/molecules/Input";
import { Headers } from "@components/templates/Headers";
import { ILoginProps } from "@services/api/auth";
import { useLogin } from "@services/api/auth/useAuth";

import { Container } from "./styles";
import { loginSchema } from "./settings";

export function SignIn() {
  const form = useForm<ILoginProps>({ resolver: yupResolver(loginSchema) });
  const { mutate: loginMutation, isPending } = useLogin();

  const handleSubmit = (data: ILoginProps) => {
    loginMutation(data, {
      onError: (err) => {
        Toast.show({
          type: "error",
          text1: err.message,
        });
      },
    });
  };

  return (
    <>
      <Headers.Simple title="Login" />
      <Container>
        <Input.Text form={form} name="email" placeholder="Email" />
        <Input.Text form={form} name="password" placeholder="Senha" />
        <Button.Primary
          title="Fazer login"
          onPress={form.handleSubmit(handleSubmit)}
          type="SECONDARY"
          isLoading={isPending}
        />
        <Button.Primary title="Cria uma conta" />
      </Container>
    </>
  );
}
