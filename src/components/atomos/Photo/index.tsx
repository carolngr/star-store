import { PropsWithChildren } from "react";
import { ImageProps } from "react-native/types";
import { Container } from "./styles";

export interface IPhotoProps extends PropsWithChildren, ImageProps {}

export const Photo = ({ children, ...rest }: IPhotoProps) => {
  return <Container {...rest}>{children}</Container>;
};
