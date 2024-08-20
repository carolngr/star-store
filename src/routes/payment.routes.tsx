import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Order } from "@screens/private/Order";
import { Payment } from "@screens/private/Payment";
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
    </Navigator>
  );
}
