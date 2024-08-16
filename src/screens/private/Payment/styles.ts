import { Box } from "@components/atomos/Box";
import styled, { css } from "styled-components/native";
import { color } from "styled-system";

export const Container = styled.View`
  padding: 24px;
  gap: 20px;
`;

export const CredCart = styled(Box)`
  width: 100%;
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

export const FiveInputsRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SmallInput = styled.TextInput`
  border-width: 1px;
  border-bottom-color: #ddd;
  width: 50px;
  padding: 5px;
  text-align: center;
`;

export const Address = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.View`
  gap: 10px;
`;
