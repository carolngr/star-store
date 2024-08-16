import { View } from "react-native";
import { IconWeight, Minus, Plus, Wallet } from "phosphor-react-native";

const glyphMap = {
  plus: Plus,
  minus: Minus,
  wallet: Wallet,
};

type IconName = keyof typeof glyphMap;

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  weight: IconWeight;
  onPress?: () => void;
}

export const Icons = ({ name, size, color, weight = "fill" }: IconProps) => {
  const IconName = glyphMap[name];

  if (!IconName) return null;

  return (
    <View>
      <IconName size={size} color={color} weight={weight} />
    </View>
  );
};
