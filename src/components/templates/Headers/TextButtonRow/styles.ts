import { CaretLeft } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  //height: 109px;

  //flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 25px;
`;

export const Title = styled.Text`
  font-weight: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
`;
