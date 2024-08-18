import {
  CaretRight,
  CheckSquare,
  Minus,
  Plus,
  Wallet,
} from "phosphor-react-native";

export const glyphMap = {
  plus: Plus,
  minus: Minus,
  wallet: Wallet,
  caretRight: CaretRight,
  checkSquare: CheckSquare,
};

export type IconName = keyof typeof glyphMap;
