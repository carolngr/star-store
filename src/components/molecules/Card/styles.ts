import styled, { css } from "styled-components/native";

import { TouchableOpacity } from "react-native";
import { IconPlus } from "../Button/Icon";

export const Container = styled(TouchableOpacity)``;

export const Photo = styled.View`
  background-color: ${({ theme }) => theme.COLORS.RED};
  border-radius: 10px;

  width: 123px;
  height: 123px;
`;

export const InfoArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Price = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.RED};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS};
  `}
`;
