import { Plus } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled(Plus).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.GRAY_300,
  weight: "fill",
}))``;
