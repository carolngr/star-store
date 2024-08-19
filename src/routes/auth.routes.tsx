import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "@screens/auth/SignIn/index";
import { SignUp } from "@screens/auth/SignUp";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator initialRouteName="signIn" screenOptions={{ headerShown: false }}>
      <Screen name="signIn" component={SignIn} />
      <Screen name="signUp" component={SignUp} />
    </Navigator>
  );
}
