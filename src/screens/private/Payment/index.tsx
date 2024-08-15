import { View, Text, SafeAreaView, TextInput } from "react-native";
import { Headers } from "@components/templates/Headers";
import {
  Address,
  Container,
  PaymentCart,
  PaymentOptions,
  FiveInputsRow,
  SmallInput,
} from "./styles";
import { CaretRight, Plus, Wallet } from "phosphor-react-native";
import { Box } from "@components/atomos/Box";
import { PaymentInfoArea } from "@components/molecules/PaymentInfoArea";
import { Button } from "@components/molecules/Button";
import { Input } from "@components/molecules/Input";

export function Payment() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Headers.Simple title="Carrinho" showBackButton />
      <Container>
        <Box>
          <Text>Jóse da Silva</Text>
          <View>
            <Text>VALID THRU</Text>
            <TextInput
              placeholder="MM/YY"
              keyboardType="numeric"
              maxLength={5}
            />
          </View>
          <FiveInputsRow>
            {[...Array(5)].map((_, index) => (
              <SmallInput key={index} keyboardType="numeric" maxLength={1} />
            ))}
          </FiveInputsRow>
        </Box>

        <PaymentOptions>
          <Plus size={32} />
          <Text>Cadastrar cartão</Text>
          <Wallet size={32} />
          <Text>Trocar Cartão</Text>
        </PaymentOptions>

        <Box>
          <Address>
            <View>
              <Text>Endereço</Text>
              <Text>Rua são martins, 79</Text>
              <Text>CENTRO, João Pessoa / PB</Text>
            </View>
            <CaretRight size={32} />
          </Address>
        </Box>

        <PaymentInfoArea />
        <Button.Primary
          title="Confirmar pagamento"
          type="SECONDARY"
          onPress={() => console.log("teste")}
        />
      </Container>
    </SafeAreaView>
  );
}
