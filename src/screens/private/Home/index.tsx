import { useNavigation } from "@react-navigation/native";
import { Container } from "./styles";

import { Headers } from "@components/templates/Headers";
import { Input } from "@components/molecules/Input";
import { Card, ICardProps } from "@components/molecules/Card";
import { AppNavigatorRoutesProps } from "@routes/botton-tabs.routes";
import { FlatList, View } from "react-native";
import { useEffect, useState } from "react";

export function Home() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const [products, setProducts] = useState<ICardProps[]>([]);

  // const itemDetails = {
  //   id: 1,
  //   title: "Blusa do Imperio",
  //   price: 7990,
  //   zipcode: "78993-000",
  //   seller: "Jo\u00e3o da Silva",
  //   thumbnailHd:
  //     "https://cdn.awsli.com.br/600x450/21/21351/produto/3853007/f66e8c63ab.jpg",
  //   date: "26/11/2015",
  // };

  function handleDetailsItem(item: ICardProps) {
    navigation.navigate("detailsitem", {
      item,
    });
  }

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/stone-pagamentos/desafio-mobile/master/store/products.json",
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  return (
    <Container>
      <Headers.Simple title="STAR STORE" />
      <Input.Search placeholder="O que você procura?" />

      <FlatList
        style={{ margin: 5 }}
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.title}
        renderItem={({ item, index }) => {
          const lastItem = index === products.length - 1;
          return (
            <View style={{ flex: lastItem ? 1 / 2 : 1 }}>
              <Card onPress={handleDetailsItem} item={item} />
            </View>
          );
        }}
      />
    </Container>
  );
}
