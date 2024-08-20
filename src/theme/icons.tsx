import {
  CaretRight,
  CheckSquare,
  Minus,
  Plus,
  Wallet,
  Eye,
  EyeClosed,
  SignOut,
  PencilLine,
  Table,
} from "phosphor-react-native";

export const glyphMap = {
  plus: Plus,
  minus: Minus,
  wallet: Wallet,
  caretRight: CaretRight,
  checkSquare: CheckSquare,
  eye: Eye,
  eyeClosed: EyeClosed,
  signOut: SignOut,
  pencil: PencilLine,
  table: Table,
};

export type IconName = keyof typeof glyphMap;
