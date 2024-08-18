import { SafeAreaView } from "react-native";
import { Headers } from "@components/templates/Headers";
import { Content } from "@components/atomos/Content";
import { InfoBlock } from "@components/molecules/InfoBlock";

export function ProfileOrderHistory() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Headers.Simple title="Meus Pedidos" showBackButton />
      <Content>
        <InfoBlock
          title="Pedido#1"
          description="Valor: 299,99 {/n} Status: Pedido Confirmado"
        />
      </Content>
    </SafeAreaView>
  );
}
