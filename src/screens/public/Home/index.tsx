import { useEffect, useRef, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Card } from "@components/molecules/Card";
import { Input } from "@components/molecules/Input";
import { Headers } from "@components/templates/Headers";
import { AppNavigatorRoutesProps } from "@routes/botton-tabs.routes";
import { useGetItems } from "@services/api/items/useGetItems";

import { Item } from "src/interfaces/entities/item";
import { Container } from "./styles";

export function Home() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const { data = [], isFetchedAfterMount } = useGetItems();

  const [filteredData, setFilteredData] = useState<Item[]>(data);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  const filterData = (text: string) => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      if (text) {
        const newData = data.filter((item) =>
          item.title.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredData(newData);
      } else {
        setFilteredData(data);
      }
    }, 300);
  };

  const renderItem = ({ item, index }: { item: Item; index: number }) => {
    const isSingleItem = index % 4 === 2 || index % 4 === 3;
    return (
      <View
        style={{
          width: isSingleItem ? "100%" : "50%",
          padding: 10,
          minHeight: 200,
        }}
      >
        <Card
          key={item.id}
          onPress={() => handleDetailsItem(item)}
          item={item}
        />
      </View>
    );
  };

  function handleDetailsItem(item: Item) {
    navigation.navigate("detailsitem", { item });
  }

  useEffect(() => {
    if (data.length > 0) {
      setFilteredData(data);
    }
  }, [isFetchedAfterMount]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Headers.Simple title={"STAR STORE"} />
      <Container>
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
    </SafeAreaView>
  );
}
