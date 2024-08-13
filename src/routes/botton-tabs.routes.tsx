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

export type AppRoutes = {
  home: undefined;
  cartshopping: undefined;
  signIn: undefined;
  detailsitem: {
    item: {
      id: number;
      title: string;
      price: number;
      zipcode: string;
      seller: string;
      thumbnailHd: string;
      date: string;
    };
  };
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
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
}
