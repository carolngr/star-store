import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "@tanstack/react-query";
import LOCAL_STORAGE_KEYS from "src/constants/localStorage";

export type TCredentials = { token: string };

interface IAccessTokenProps {
  setAccessToken: (token: TCredentials) => Promise<void>;
  getAccessToken: () => Promise<TCredentials | null>;
  clearAccessToken: () => Promise<void>;
}

export const useAccessToken: IAccessTokenProps = {
  getAccessToken: async () => {
    const [token] = await Promise.all([
      AsyncStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN),
    ]);

    return { token } as Record<keyof TCredentials, string>;
  },
  setAccessToken: async (tokens: TCredentials) => {
    const multiSet: Array<[string, string]> = [
      [LOCAL_STORAGE_KEYS.TOKEN, tokens.token],
    ];

    return await AsyncStorage.multiSet(multiSet);
  },
  clearAccessToken: async () => {
    await AsyncStorage.multiRemove([LOCAL_STORAGE_KEYS.TOKEN]);
  },
};

export const useAccessTokenValidation = () =>
  useQuery({
    queryKey: ["access_token_validation"],
    queryFn: () =>
      useAccessToken.getAccessToken().then((res) => Boolean(res?.token)),
  });
