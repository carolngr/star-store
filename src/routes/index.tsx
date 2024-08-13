import { View } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { MenuTabs } from "./botton-tabs.routes";

import { AppRoutes } from "./app.routes";
import { useTheme } from "styled-components/native";

export function Routes() {
  const COLORS = useTheme();

  const theme = DefaultTheme;
  theme.colors.background = COLORS.COLORS.GRAY_100;

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer theme={theme}>
        <MenuTabs />
        {/* <MenuTabs /> */}
      </NavigationContainer>
    </View>
  );
}
