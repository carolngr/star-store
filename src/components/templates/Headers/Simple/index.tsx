import { View, Text, TouchableOpacity } from "react-native";
import { BackIcon, Container, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/botton-tabs.routes";

type Props = {
  title: string;
  showBackButton?: boolean;
};

export function Simple({ title, showBackButton = false }: Props) {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      {showBackButton && (
        <TouchableOpacity onPress={handleGoBack}>
          <BackIcon />
        </TouchableOpacity>
      )}

      <Title>{title}</Title>
    </Container>
  );
}
