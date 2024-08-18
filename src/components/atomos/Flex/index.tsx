import { PropsWithChildren } from "react";
import { FlexboxProps, GridGapProps, SpaceProps } from "styled-system";
import { Container } from "./styles";

export interface IFlexProps
  extends PropsWithChildren,
    FlexboxProps,
    SpaceProps,
    GridGapProps {}

export const Flex = ({ children, ...rest }: IFlexProps) => {
  return (
    <Container flexDirection="row" alignItems="center" {...rest}>
      {children}
    </Container>
  );
};
