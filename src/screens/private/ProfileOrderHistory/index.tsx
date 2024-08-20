import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/botton-tabs.routes";
import { FlatList, SafeAreaView } from "react-native";

import { Content } from "@components/atomos/Content";
import { InfoBlock } from "@components/molecules/InfoBlock";
import { Headers } from "@components/templates/Headers";
import { useFindAllOrders } from "@services/api/orders/useOrders";
import { formatCurrency } from "@utils/formatCurrency";

export function ProfileOrderHistory() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const { data: orders = [] } = useFindAllOrders();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Headers.Simple title="Meus Pedidos" showBackButton />
      <Content>
        <FlatList
          data={orders}
          renderItem={({ item }) => (
            <InfoBlock
              title={`Pedido: #${item.order_code}`}
              description={`Valor total: ${formatCurrency(item.total_value)}\n
              Status: ${item.status}`}
              onPress={() =>
                navigation.navigate("orderCompleted", {
                  order: item,
                })
              }
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 20, marginBottom: 10 }}
        />
      </Content>
    </SafeAreaView>
  );
}
