import { CaretLeft } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.Text`
  font-weight: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  flex: 1;
  text-align: center;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 28,
  color: theme.COLORS.GRAY_700,
}))``;
