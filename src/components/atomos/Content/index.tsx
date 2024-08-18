import { PropsWithChildren } from "react";
import { FlexboxProps, GridGapProps, SpaceProps } from "styled-system";
import { Container } from "./styles";

export interface IContentProps
  extends PropsWithChildren,
    FlexboxProps,
    SpaceProps,
    GridGapProps {}

export const Content = ({ children, ...rest }: IContentProps) => {
  return (
    <Container padding={24} {...rest}>
      {children}
    </Container>
  );
};
