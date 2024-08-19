import { useNavigation } from "@react-navigation/native";
import { FlatList, View } from "react-native";

import { Card } from "@components/molecules/Card";
import { Input } from "@components/molecules/Input";
import { Headers } from "@components/templates/Headers";
import { AppNavigatorRoutesProps } from "@routes/botton-tabs.routes";
import { useGetItems } from "@services/api/items/useGetItems";

import { Item } from "src/interfaces/entities/item";
import { Container } from "./styles";
import { stories } from "@stores/index";
import { useEffect, useState } from "react";

export function Home() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const { data = [] } = useGetItems();

  const [filteredData, setFilteredData] = useState<Item[]>([]);
  const [searchText, setSearchText] = useState("");

  const currentUser = stories.useCurrentUserStore().currentUser;

  function handleDetailsItem(item: Item) {
    navigation.navigate("detailsitem", {
      item,
    });
  }

  useEffect(() => {
    filterData(searchText);
  }, [data, searchText]);

  const filterData = (text: string) => {
    setSearchText(text);
    if (text) {
      const newData = data.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  };

  const renderItem = ({ item, index }: { item: Item; index: number }) => {
    const isSingleItem = index % 4 === 2 || index % 4 === 3;
    return (
      <View style={{ width: isSingleItem ? "100%" : "50%", padding: 10 }}>
        <Card key={item.id} onPress={handleDetailsItem} item={item} />
      </View>
    );
  };

  return (
    <Container>
      <Headers.Simple title={currentUser?.name + "STAR STORE"} />
      <Input.Search
        placeholder="O que você procura?"
        onChangeText={filterData}
      />

      <FlatList
        data={filteredData}
        key={"_"}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 10,
        }}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </Container>
  );
}
