import { User } from "@interfaces/entities/user";

export type State = {
  currentUser?: User;
};

export type Actions = {
  setCurrentUserData: (args: User) => void;
  setClearUser: () => void;
};
