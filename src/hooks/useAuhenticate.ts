import { findCurrentUserData } from "@services/api/auth";
import { useAccessToken } from "./useAccessToken";
import { stories } from "@stores/index";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/botton-tabs.routes";

export const useAuthenticate = () => {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const { setCurrentUserData, setClearUser } = stories.useCurrentUserStore();

  const auth = async (token: string) => {
    if (token) {
      await useAccessToken.setAccessToken({ token });
      const responseCurrentUserData = await findCurrentUserData();
      if (responseCurrentUserData) {
        setCurrentUserData(responseCurrentUserData);
        Toast.show({
          type: "success",
          text1: "Cadastro efetuado com sucesso!",
        });
        navigation.navigate("cartshopping");
      }
    }
  };

  const signOut = async () => {
    setClearUser();
    await useAccessToken.clearAccessToken();
    navigation.navigate("home");
  };

  return {
    auth,
    signOut,
  };
};
