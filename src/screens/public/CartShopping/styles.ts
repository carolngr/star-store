import { ScrollView } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  gap: 14px;
  padding: 0 24px;
`;

export const EmptyCart = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
`;
