import { View, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { PhoneSlash, Plus } from "phosphor-react-native";
import { Container } from "./styles";

type IconPlusPros = TouchableOpacityProps & {};

export const IconPlus = ({ ...rest }: IconPlusPros) => {
  return (
    <TouchableOpacity {...rest}>
      <Container />
    </TouchableOpacity>
  );
};
