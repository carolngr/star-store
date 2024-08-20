import { PropsWithChildren } from "react";
import { FlexboxProps, GridGapProps, SpaceProps } from "styled-system";
import { Container } from "./styles";
import { ViewProps } from "react-native/types";

export interface IFlexProps
  extends PropsWithChildren,
    FlexboxProps,
    SpaceProps,
    GridGapProps,
    ViewProps {}

export const Flex = ({ children, ...rest }: IFlexProps) => {
  return (
    <Container flexDirection="row" alignItems="center" {...rest}>
      {children}
    </Container>
  );
};
