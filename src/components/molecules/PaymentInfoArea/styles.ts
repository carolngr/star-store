import { Box } from "@components/atomos/Box";
import styled, { css } from "styled-components/native";

export const Container = styled(Box)``;

export const BoxInformation = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const TotalPrice = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.RED_DARK};
  `}
`;
