import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "react-native";
import Toast from "react-native-toast-message";
import { ThemeProvider } from "styled-components";

import { Routes } from "./src/routes";
import theme from "./src/theme";
import { ModalProvider } from "@stores/context/useModal";
import { NativeBaseProvider } from "native-base";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" translucent />
        <NativeBaseProvider>
          <ModalProvider>
            <Routes />
          </ModalProvider>
        </NativeBaseProvider>
      </ThemeProvider>
      <Toast />
    </QueryClientProvider>
  );
}
