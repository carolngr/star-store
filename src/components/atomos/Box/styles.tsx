import styled from "styled-components/native";
import { flexbox, space, gridGap } from "styled-system";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 10px;

  border-width: 1px;
  border-color: #ddd;
  border-bottom-width: 0;
  box-shadow: 1px 2px 2px ${({ theme }) => theme.COLORS.GRAY_300};

  padding: 20px;

  gap: 10px;

  ${gridGap}
  ${flexbox};
  ${space}
`;
