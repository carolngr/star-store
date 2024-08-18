import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { CaretRight, Plus, Wallet } from "phosphor-react-native";
import { useOrderStore } from "@stores/reducers";

import { Box } from "@components/atomos/Box";
import { PaymentInfoArea } from "@components/molecules/PaymentInfoArea";
import { Button } from "@components/molecules/Button";
import { Input } from "@components/molecules/Input";

import { Headers } from "@components/templates/Headers";
import {
  Container,
  PaymentOptions,
  Option,
  CredCart,
  TitleName,
  Form,
  Description,
  ListCard,
} from "./styles";
import { Icons } from "@components/atomos/Icons";
import { InfoBlock } from "@components/molecules/InfoBlock";

interface IDataCard {
  titular: string;
  number: string;
  validade: string;
  cvv: string;
}

export function Payment() {
  const [showListCard, showListCredCard] = useState(false);
  const [isShowForm, setShowForm] = useState(false);

  const [datacard, setDataCard] = useState<IDataCard>({
    titular: "Titular t. tittular",
    number: "0000 0000 0000 0000",
    validade: "00/00",
    cvv: "000",
  });

  const [items, calcPayment] = useOrderStore((state) => [
    state.selectedProducts,
    state.calcPayment,
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Headers.Simple title="Pagamento" showBackButton />
      <Container>
        <CredCart>
          <TitleName>{datacard.titular}</TitleName>
          <View>
            <Description>{datacard.validade}</Description>
          </View>
          <View>
            <Description>{datacard.number}</Description>
          </View>
          <View>
            <Description>{datacard.cvv}</Description>
          </View>
        </CredCart>

        <PaymentOptions>
          <Option>
            <Button.Icon
              name="plus"
              weight="fill"
              size={24}
              onPress={() => {
                setShowForm(true);
                showListCredCard(false);
              }}
              TitleButton="Cadastrar cartão"
            />
          </Option>
          <Option>
            <Button.Icon
              name="wallet"
              weight="fill"
              size={24}
              TitleButton="Trocar cartão"
              onPress={() => {
                showListCredCard(true);
                setShowForm(false);
              }}
            />
          </Option>
        </PaymentOptions>

        {showListCard && (
          <TouchableOpacity>
            <ListCard>
              <Text>Nubank</Text>
              <Text>****012</Text>
              <Icons name="caretRight" weight="regular" />
            </ListCard>
          </TouchableOpacity>
        )}

        {isShowForm && (
          <Form>
            <Input.Text
              placeholder="Nome do titular"
              value={datacard?.titular}
              onChangeText={(text) =>
                setDataCard((data) => ({
                  ...data,
                  titular: text,
                }))
              }
            />

            <Input.Mask
              type="credit-card"
              value={datacard?.number ?? ""}
              onChangeText={(text) =>
                setDataCard({ ...datacard, number: text })
              }
              placeholder="Número do cartão de crédito"
              keyboardType="numeric"
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 10,
              }}
            >
              <Input.Mask
                containerProps={{ width: "50%" }}
                type="custom"
                options={{ mask: "99/99" }}
                placeholder="Validade"
                value={datacard?.validade}
                onChangeText={(text) =>
                  setDataCard({ ...datacard, validade: text })
                }
              />

              <Input.Text
                containerProps={{ width: "50%" }}
                placeholder="CVV"
                keyboardType="numeric"
                maxLength={3}
                value={datacard?.cvv}
                onChangeText={(text) => setDataCard({ ...datacard, cvv: text })}
              />
            </View>
            <Button.Primary title="Cadastrar" type="SECONDARY" />
          </Form>
        )}

        {!showListCard && !isShowForm && (
          <>
            <InfoBlock
              title="Endereço"
              description="Rua são martins, 79
              CENTRO, João Pessoa / PB"
            />
            <PaymentInfoArea
              subTotal={calcPayment().subTotalValue}
              valorFrete={calcPayment().freteValue}
              totalValue={calcPayment().totalValue}
            />
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
