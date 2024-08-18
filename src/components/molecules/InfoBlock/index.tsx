import { Box } from "@components/atomos/Box";
import { Icons } from "@components/atomos/Icons";
import { View, Text, TouchableOpacity } from "react-native";
import { Address } from "./styles";
import { IconName } from "@theme/icons";

export type InfoBlockProps = {
  title: string;
  description: string;
  onPress?: () => void;
};

export const InfoBlock = ({ title, description, onPress }: InfoBlockProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box>
        <Address>
          <View>
            <Text>{title}</Text>
            <Text numberOfLines={1} style={{ flexWrap: "wrap" }}>
              {description}
            </Text>
          </View>
          <Icons name="caretRight" weight="regular" size={32} />
        </Address>
      </Box>
    </TouchableOpacity>
  );
};
