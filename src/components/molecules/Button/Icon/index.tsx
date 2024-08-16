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
};

export const Icon = ({ name, size, color, weight, ...rest }: IconPlusPros) => {
  return (
    <TouchableOpacity {...rest}>
      <Icons name={name} size={size} color={color} weight={weight} />
    </TouchableOpacity>
  );
};
