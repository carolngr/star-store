import { PropsWithChildren } from "react";
import {
  FlexboxProps,
  GridGapProps,
  LayoutProps,
  SpaceProps,
} from "styled-system";
import { Container } from "./styles";

export interface IPhotoProps
  extends PropsWithChildren,
    FlexboxProps,
    SpaceProps,
    LayoutProps,
    GridGapProps {}

export const Photo = ({ children, ...rest }: IPhotoProps) => {
  return <Container {...rest}>{children}</Container>;
};
