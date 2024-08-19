import {
  CaretRight,
  CheckSquare,
  Minus,
  Plus,
  Wallet,
  Eye,
  EyeClosed,
} from "phosphor-react-native";

export const glyphMap = {
  plus: Plus,
  minus: Minus,
  wallet: Wallet,
  caretRight: CaretRight,
  checkSquare: CheckSquare,
  eye: Eye,
  eyeClosed: EyeClosed,
};

export type IconName = keyof typeof glyphMap;
