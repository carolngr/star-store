import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Actions, State } from "./types";

const defaultState: State = {};

export const useCurrentUserStore = create(
  persist<State & Actions>(
    (set) => ({
      ...defaultState,
      setCurrentUserData: (user) => set({ currentUser: user }),
    }),
    {
      name: "storage:user",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
