import { View, Text, SafeAreaView, TextInput } from "react-native";
import { Headers } from "@components/templates/Headers";
import {
  Address,
  Container,
  PaymentOptions,
  FiveInputsRow,
  SmallInput,
  Option,
  CredCart,
  TitleName,
  Form,
} from "./styles";
import { CaretRight, Plus, Wallet } from "phosphor-react-native";
import { Box } from "@components/atomos/Box";
import { PaymentInfoArea } from "@components/molecules/PaymentInfoArea";
import { Button } from "@components/molecules/Button";
import { Input } from "@components/molecules/Input";
import { useState } from "react";

export function Payment() {
  const [isShowForm, setShowForm] = useState<boolean>(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Headers.Simple title="Pagamento" showBackButton />
      <Container>
        <CredCart>
          <TitleName>Jóse da Silva</TitleName>
          <View>
            <Text>VALID THRU</Text>
            <TextInput
              placeholder="MM/YY"
              keyboardType="numeric"
              maxLength={5}
            />
          </View>
          <FiveInputsRow>
            {[...Array(4)].map((_, index) => (
              <SmallInput key={index} keyboardType="numeric" maxLength={1} />
            ))}
            <SmallInput keyboardType="numeric" maxLength={1} />
          </FiveInputsRow>
        </CredCart>

        <PaymentOptions>
          <Option>
            <Button.Icon
              name="plus"
              weight="fill"
              size={24}
              onPress={() => setShowForm(true)}
            />
            <Text>Cadastrar cartão</Text>
          </Option>
          <Option>
            <Button.Icon name="wallet" weight="fill" size={24} />
            <Text>Trocar Cartão</Text>
          </Option>
        </PaymentOptions>

        {isShowForm ? (
          <Form>
            <Input.InputText placeholder="Nome do titular" />
            <Input.InputText placeholder="Número do cartão" />
            <View>
              <Input.InputText placeholder="Validade" />
              <Input.InputText placeholder="CVV" />
            </View>
          </Form>
        ) : (
          <>
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

            <PaymentInfoArea subtotal={} valorFrete={29.9} />
            <Button.Primary
              title="Confirmar pagamento"
              type="SECONDARY"
              onPress={() => console.log("teste")}
            />
          </>
        )}
      </Container>
    </SafeAreaView>
  );
}
