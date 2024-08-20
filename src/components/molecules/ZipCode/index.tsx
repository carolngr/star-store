import { Box } from "@components/atomos/Box";
import { Input } from "@components/molecules/Input";
import { Container, Title } from "./styles";
import { useForm } from "react-hook-form";

interface IZipCodeProps {
  onChange?: (text: string) => void;
}

export const ZipCode = ({ onChange }: IZipCodeProps) => {
  const form = useForm();
  return (
    <Container>
      <Title>Cep</Title>
      <Input.Mask
        name="cep"
        form={form}
        containerProps={{ width: "50%" }}
        placeholder="XXXXX-XXX"
        type="zip-code"
        onChangeText={onChange}
      />
    </Container>
  );
};
