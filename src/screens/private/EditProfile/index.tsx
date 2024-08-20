import React from "react";
import { useForm } from "react-hook-form";
import { SafeAreaView } from "react-native";
import Toast from "react-native-toast-message";

import { Button } from "@components/molecules/Button";
import { Input } from "@components/molecules/Input";
import { Headers } from "@components/templates/Headers";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUpdateRegisterProps } from "@services/api/auth";
import { useUpdateRegister } from "@services/api/auth/useAuth";

import { stories } from "@stores/index";
import { loginSchema } from "./settings";
import { Container } from "./styles";

export function EditProfile() {
  const { currentUser } = stories.useCurrentUserStore();
  const form = useForm<IUpdateRegisterProps>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      name: currentUser?.name,
      email: currentUser?.email,
    },
  });
  const { mutate: updateRegister, isPending: loading } = useUpdateRegister();

  const handleSubmit = (dataForm: IUpdateRegisterProps) => {
    updateRegister(dataForm, {
      onSuccess: () => {
        Toast.show({
          type: "success",
          text1: "Dados atualizado com sucesso!",
        });
      },
      onError: () => {
        Toast.show({
          type: "error",
          text1: "Erro ao atualizar informações",
        });
      },
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Headers.Simple title="Editar dados do perfil" showBackButton />
      <Container>
        <Input.Text form={form} name="name" placeholder="Name" />
        <Input.Text
          form={form}
          name="email"
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Button.Primary
          title="Salvar dados"
          onPress={form.handleSubmit(handleSubmit)}
          isLoading={loading}
        />
      </Container>
    </SafeAreaView>
  );
}
