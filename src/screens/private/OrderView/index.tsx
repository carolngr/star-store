import { FlatList, SafeAreaView, ScrollView, Text } from "react-native";
import { Headers } from "@components/templates/Headers";
import { Content } from "@components/atomos/Content";
import { InfoBlock } from "@components/molecules/InfoBlock";
import { stories } from "@stores/index";
import { Box } from "@components/atomos/Box";
import { OrderItem } from "@components/organisms/OrderItem";

const data = [
  { id: "1", title: "Item 1", description: "Descrição do Item 1" },
  { id: "2", title: "Item 2", description: "Descrição do Item 2" },
  { id: "3", title: "Item 3", description: "Descrição do Item 3" },
  { id: "4", title: "Item 3", description: "Descrição do Item 4" },
  { id: "5", title: "Item 3", description: "Descrição do Item 5" },
  { id: "6", title: "Item 3", description: "Descrição do Item 6" },
  { id: "7", title: "Item 3", description: "Descrição do Item 7" },
];

export function OrderView() {
  const [selectedproducts] = stories.useOrderStore((state) => [
    state.selectedProducts,
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Headers.Simple title="Pedido" showBackButton />
      <Content>
        <ScrollView style={{ paddingBottom: 20 }}>
          <InfoBlock title="Pedido #2" description="teste" />
          <Box>
            {selectedproducts.map((product) => (
              <OrderItem
                item={product}
                key={product.title}
                fixedAmount={true}
              />
            ))}
          </Box>
        </ScrollView>
      </Content>
    </SafeAreaView>
  );
}
