import { TextInputMask } from "react-native-masked-text";
import styled, { css } from "styled-components/native";
import { width } from "styled-system";

export const Container = styled.View`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_500};
    background-color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};

  border-radius: 5px;
  padding: 14px;

  ${width}
`;

export const InputMask = styled(TextInputMask)`
  text-align: center;
`;
