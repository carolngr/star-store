import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Flex } from "@components/atomos/Flex";
import { Icons } from "@components/atomos/Icons";
import { Headers } from "@components/templates/Headers";
import { useAuthenticate } from "@hooks/useAuhenticate";
import { AppNavigatorRoutesProps } from "@routes/botton-tabs.routes";

import { Card, Container } from "./styles";

export function Profile() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const { signOut } = useAuthenticate();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Headers.Simple title="Meu Perfil" />

      <Flex
        flexDirection="column"
        justifyContent="space-between"
        flex={1}
        pb={30}
      >
        <Container>
          <Card>
            <Flex
              flexDirection="column"
              alignItems="flex-start"
              style={{ gap: 20 }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("editProfile")}
              >
                <Flex style={{ gap: 10 }}>
                  <Icons weight="regular" name="pencil" />
                  <Text>Editar perfil</Text>
                </Flex>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("profileOrderHistory")}
              >
                <Flex style={{ gap: 10 }}>
                  <Icons weight="regular" name="table" />
                  <Text>Histórico de compras</Text>
                </Flex>
              </TouchableOpacity>
            </Flex>
          </Card>
        </Container>
        <Container>
          <TouchableOpacity onPress={() => signOut()}>
            <Card>
              <Flex justifyContent="space-between" flex={1}>
                <Text>Sair</Text>
                <Icons weight="regular" name="signOut" />
              </Flex>
            </Card>
          </TouchableOpacity>
        </Container>
      </Flex>
    </SafeAreaView>
  );
}
