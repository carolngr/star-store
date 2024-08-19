import { FlatList, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/botton-tabs.routes";

import { Headers } from "@components/templates/Headers";
import { Content } from "@components/atomos/Content";
import { InfoBlock } from "@components/molecules/InfoBlock";

const data = [
  { id: "1", title: "Item 1", description: "Descrição do Item 1" },
  { id: "2", title: "Item 2", description: "Descrição do Item 2" },
  { id: "3", title: "Item 3", description: "Descrição do Item 3" },
  { id: "4", title: "Item 3", description: "Descrição do Item 4" },
  { id: "5", title: "Item 3", description: "Descrição do Item 5" },
  { id: "6", title: "Item 3", description: "Descrição do Item 6" },
  { id: "7", title: "Item 3", description: "Descrição do Item 7" },
];

export function ProfileOrderHistory() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Headers.Simple title="Meus Pedidos" showBackButton />
      <Content>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <InfoBlock
              title={item.title}
              description={item.description}
              onPress={() => navigation.navigate("payment")}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 28 }}
        />
      </Content>
    </SafeAreaView>
  );
}
