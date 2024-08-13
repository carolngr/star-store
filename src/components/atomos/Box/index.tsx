import { PropsWithChildren } from "react";
import { FlexboxProps, GridGapProps, SpaceProps } from "styled-system";
import { Container } from "./styles";

export interface IBoxProps
  extends PropsWithChildren,
    FlexboxProps,
    SpaceProps,
    GridGapProps {}

export const Box = ({ children, ...rest }: IBoxProps) => {
  return <Container {...rest}>{children}</Container>;
};
