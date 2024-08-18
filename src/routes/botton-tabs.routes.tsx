import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { House, ShoppingCart, User } from "phosphor-react-native";

import { useTheme } from "styled-components/native";

import { AppRoutes } from "./app.routes";

import { SignIn } from "@screens/auth/SignIn";
import { Home } from "@screens/private/Home";
import { CartShopping } from "@screens/private/CartShopping";
import { DetailsItem } from "@screens/private/DetailsItem";
import { Product } from "@stores/reducers/types";
import { Payment } from "@screens/private/Payment";
import { Order } from "@screens/private/Order";
import { ProfileOrderHistory } from "@screens/private/ProfileOrderHistory";

export type AppRoutes = {
  home: undefined;
  cartshopping: undefined;
  signIn: undefined;
  detailsitem: {
    item: Product;
  };
  payment: undefined;
  order: undefined;
  profileorderhistory: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function MenuTabs() {
  const { FONT_SIZE } = useTheme();

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
        component={CartShopping}
        options={{
          tabBarIcon: ({ color }) => (
            <ShoppingCart size={FONT_SIZE.LG} color={color} />
          ),
        }}
      />
      <Screen
        name="signIn"
        component={SignIn}
        options={{
          tabBarIcon: ({ color }) => <User size={FONT_SIZE.LG} color={color} />,
        }}
      />

      <Screen
        name="detailsitem"
        component={DetailsItem}
        options={{ tabBarButton: () => null, unmountOnBlur: true }}
      />

      <Screen
        name="payment"
        component={Payment}
        options={{ unmountOnBlur: true }}
      />

      <Screen
        name="order"
        component={Order}
        options={{ unmountOnBlur: true }}
      />

      <Screen
        name="profileorderhistory"
        component={ProfileOrderHistory}
        options={{ unmountOnBlur: true }}
      />
    </Navigator>
  );
}
