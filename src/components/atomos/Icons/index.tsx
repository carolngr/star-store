import { View } from "react-native";
import { IconWeight } from "phosphor-react-native";
import { IconName, glyphMap } from "@theme/icons";

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
