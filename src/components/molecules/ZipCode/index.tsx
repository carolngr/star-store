import { Box } from "@components/atomos/Box";
import { Input } from "@components/molecules/Input";
import { Container, Title } from "./styles";

export const ZipCode = () => {
  return (
    <Container>
      <Title>Cep</Title>
      <Input.Mask
        containerProps={{ width: "50%" }}
        placeholder="XXXXX-XXX"
        type="zip-code"
      />
    </Container>
  );
};
