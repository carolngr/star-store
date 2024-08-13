import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export const QuantityNumber = styled.Text`
  font-size: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const BaseButton = styled(TouchableOpacity)`
  border-width: 1px solid;
  border-radius: 4px;
`;

export const Add = styled(BaseButton)``;

export const Decrement = styled(BaseButton)``;
