import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EditProfile } from "@screens/private/EditProfile";
import { OrderCompleted } from "@screens/private/OrderCompleted";
import { Payment } from "@screens/private/Payment";
import { Profile } from "@screens/private/Profile";
import { ProfileOrderHistory } from "@screens/private/ProfileOrderHistory";
import { CartShopping } from "@screens/public/CartShopping";

const { Navigator, Screen } = createNativeStackNavigator();

export function PaymentRoutes() {
  return (
    <Navigator
      initialRouteName="cartshopping"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="cartshopping" component={CartShopping} />
      <Screen name="payment" component={Payment} />
      <Screen name="profile" component={Profile} />
      <Screen name="profileOrderHistory" component={ProfileOrderHistory} />
      <Screen name="editProfile" component={EditProfile} />
      <Screen name="orderCompleted" component={OrderCompleted} />
    </Navigator>
  );
}
