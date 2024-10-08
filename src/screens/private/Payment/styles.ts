import { Box } from "@components/atomos/Box";
import styled, { css } from "styled-components/native";
import { color } from "styled-system";

export const Container = styled.View`
  padding: 24px;
  gap: 20px;
`;

export const ListCard = styled(Box)`
  flex-direction: row;
  align-items: center;
  gap: 6px;
  justify-content: space-between;
`;

export const PaymentOptions = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Option = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Form = styled.View`
  gap: 10px;
`;
