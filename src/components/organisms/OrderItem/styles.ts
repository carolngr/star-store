import { Box } from "@components/atomos/Box";
import styled, { css } from "styled-components/native";

export const Container = styled(Box)`
  flex-direction: row;
  align-items: center;
`;

export const Details = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Price = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.RED_DARK};
  `}
`;

export const BoxTop = styled.View`
  margin: 0;
`;

export const BoxBottom = styled.View`
  margin-top: 14px;
  gap: 4px;
`;
