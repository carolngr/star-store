import { PropsWithChildren } from "react";
import { FlexboxProps, GridGapProps, SpaceProps } from "styled-system";
import { Container } from "./styles";
import { ViewProps } from "react-native/types";

export interface IBoxProps
  extends PropsWithChildren,
    FlexboxProps,
    SpaceProps,
    GridGapProps,
    ViewProps {}

export const Box = ({ children, ...rest }: IBoxProps) => {
  return <Container {...rest}>{children}</Container>;
};
