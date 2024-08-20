import styled, { css } from "styled-components/native";
import { Box } from "@components/atomos/Box";

export const Cart = styled(Box)`
  padding: 37px 24px;
  background-color: #3f3f3f;
`;

export const TitleName = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.WHITE};
  `}
  padding-bottom: 30px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const NumberCart = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
