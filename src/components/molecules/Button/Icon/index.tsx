import { View, TouchableOpacity, TouchableOpacityProps } from "react-native";
import {
  IconWeight,
  Minus,
  PhoneSlash,
  Plus,
  Wallet,
} from "phosphor-react-native";
import { Container } from "./styles";
import { Icons } from "@components/atomos/Icons";
import { Label } from "@components/atomos/Label";

const glyphMap = {
  plus: Plus,
  minus: Minus,
  wallet: Wallet,
};

type IconName = keyof typeof glyphMap;

type IconPlusPros = TouchableOpacityProps & {
  name: IconName;
  size?: number;
  color?: string;
  weight: IconWeight;
  TitleButton: string;
};

export const Icon = ({
  name,
  size,
  color,
  weight,
  TitleButton,
  ...rest
}: IconPlusPros) => {
  return (
    <Container {...rest}>
      <Icons name={name} size={size} color={color} weight={weight} />
      <Label title={TitleButton} />
    </Container>
  );
};
