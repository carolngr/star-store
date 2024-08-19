import styled from "styled-components/native";

export const Error = styled.Text`
  ${({ theme }) => `
      font-family: ${theme.FONT_FAMILY.BOLD};
      color: ${theme.COLORS.RED_DARK};
  `}
`;
