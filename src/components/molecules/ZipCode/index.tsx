import { Box } from "@components/atomos/Box";
import { Input } from "@components/molecules/Input";
import { Container, Title } from "./styles";

interface IZipCodeProps {
  onChange?: (text: string) => void;
}

export const ZipCode = ({ onChange }: IZipCodeProps) => {
  return (
    <Container>
      <Title>Cep</Title>
      <Input.Mask
        containerProps={{ width: "50%" }}
        placeholder="XXXXX-XXX"
        type="zip-code"
        onChangeText={onChange}
      />
    </Container>
  );
};
