import { View, Text } from "react-native";
import React from "react";
import { Input } from "@components/molecules/Input";
import { Container } from "./styles";
import { Button } from "@components/molecules/Button";
import { Headers } from "@components/templates/Headers";

export function SignIn() {
  return (
    <>
      <Headers.Simple title="Login" />
      <Container>
        <Input.InputText placeholder="Email" />
        <Input.InputText placeholder="Senha" />
        <Button.Primary
          title="Fazer login"
          onPress={() => console.log("Carol teste")}
          type="SECONDARY"
        />
        <Button.Primary title="Cria uma conta" />
      </Container>
    </>
  );
}
