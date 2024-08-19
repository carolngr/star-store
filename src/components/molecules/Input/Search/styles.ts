import { MagnifyingGlass } from "phosphor-react-native";
import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_200};
  `};

  border-radius: 5px;
  padding: 8px;

  gap: 6px;
`;

export const Input = styled(TextInput)`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_500};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XS};
  `};
`;

export const Icon = styled(MagnifyingGlass).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_400,
}))``;
