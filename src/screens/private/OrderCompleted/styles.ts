import styled, { css } from "styled-components/native";

export const Container = styled.View`
  gap: 14px;
  padding: 0 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  padding-right: 4px;
`;

export const Total = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.RED_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
