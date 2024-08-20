import { View } from "react-native";
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { House, ShoppingCart, User } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

import Badge from "@components/atomos/Badge";
import { AppRoutes } from "@interfaces/entities/routes";
import { CartShopping } from "@screens/public/CartShopping";
import { Home } from "@screens/public/Home";
import { stories } from "@stores/index";
import { AuthRoutes } from "./auth.routes";
import { DetailsItem } from "@screens/public/DetailsItem";
import { PaymentRoutes } from "./payment.routes";

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function MenuTabs() {
  const { FONT_SIZE } = useTheme();
  const [countProducts] = stories.useOrderStore((state) => [
    state.selectedProducts?.length,
  ]);

  return (
    <Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <House size={FONT_SIZE.LG} color={color} />
          ),
        }}
      />

      <Screen
        name="cartshopping"
        component={PaymentRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <ShoppingCart size={FONT_SIZE.LG} color={color} />
              <Badge count={countProducts} />
            </View>
          ),
        }}
      />

      <Screen
        name="signIn"
        component={AuthRoutes}
        options={{
          tabBarIcon: ({ color }) => <User size={FONT_SIZE.LG} color={color} />,
        }}
      />
      <Screen
        name="detailsitem"
        component={DetailsItem}
        options={{ tabBarButton: () => null, unmountOnBlur: true }}
      />
      {/* <Screen
        name="payment"
        component={Payment}
        options={{ unmountOnBlur: true }}
      /> */}
      {/* <Screen
        name="order"
        component={Order}
        options={{ unmountOnBlur: true }}
      />
      <Screen
        name="profileorderhistory"
        component={ProfileOrderHistory}
        options={{ unmountOnBlur: true }}
      />
      <Screen
        name="orderview"
        component={OrderView}
        options={{ tabBarButton: () => null, unmountOnBlur: true }}
      /> */}
    </Navigator>
  );
}
