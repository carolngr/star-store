import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";
import { ButtonTypeStyleProps, Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  isLoading?: boolean;
};

export function Primary({
  title,
  type = "PRIMARY",
  isLoading,
  ...rest
}: Props) {
  return (
    <Container type={type} disabled={isLoading || rest.disabled} {...rest}>
      {isLoading ? <ActivityIndicator /> : <Title type={type}>{title}</Title>}
    </Container>
  );
}
