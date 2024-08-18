import { Container } from "./styles";

type Props = {
  title: string;
};

export const Label = ({ title }: Props) => {
  return <Container>{title}</Container>;
};
