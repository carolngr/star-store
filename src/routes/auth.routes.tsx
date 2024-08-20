import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "@screens/auth/SignIn/index";
import { SignUp } from "@screens/auth/SignUp";
import { EditProfile } from "@screens/private/EditProfile";
import { OrderCompleted } from "@screens/private/OrderCompleted";
import { Profile } from "@screens/private/Profile";
import { ProfileOrderHistory } from "@screens/private/ProfileOrderHistory";
import { stories } from "@stores/index";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  const { currentUser } = stories.useCurrentUserStore();
  return (
    <Navigator initialRouteName="signIn" screenOptions={{ headerShown: false }}>
      {!currentUser ? (
        <>
          <Screen name="signIn" component={SignIn} />
          <Screen name="signUp" component={SignUp} />
        </>
      ) : (
        <>
          <Screen name="profile" component={Profile} />
          <Screen name="profileOrderHistory" component={ProfileOrderHistory} />
          <Screen name="editProfile" component={EditProfile} />
          <Screen name="orderCompleted" component={OrderCompleted} />
        </>
      )}
    </Navigator>
  );
}
