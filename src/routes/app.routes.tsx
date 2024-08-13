import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/private/Home/index";

import { SignIn } from "@screens/auth/SignIn/index";
import theme from "@theme/index";
import { useTheme } from "styled-components/native";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="signIn" component={SignIn} />
    </Navigator>
  );
}
