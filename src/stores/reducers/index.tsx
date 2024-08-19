import { create } from "zustand";
import { Actions, Product, State } from "./types";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IViaCEP } from "@interfaces/entities/viaCep";

const defaultState: State = {
  selectedProducts: [],
  count: 0,
};

const validationProductExists = (
  productId: string,
  selectedProducts: Product[]
) => {
  return selectedProducts.find((product) => product.id === productId);
};

const updateProductAmount = (
  item: Product,
  selectedProducts: Product[],
  amount: number
) => {
  const modifiedList = selectedProducts.map((product) => {
    if (product.id === item.id) {
      // TOOO: Validar amount
      // if (amount < 0) {
      //   return product;
      // }

      return {
        ...product,
        amount: product.amount + amount,
      };
    }
    return product;
  });
  return modifiedList;
};

export const useOrderStore = create(
  persist<State & Actions>(
    (set, get) => ({
      ...defaultState,
      appendProduct: (product: Product) => {
        const selectedProducts = get().selectedProducts;
        const productExistis = validationProductExists(
          product.id,
          selectedProducts
        );

        if (productExistis) {
          const modifiedList = updateProductAmount(
            productExistis,
            selectedProducts,
            1
          );
          set(() => ({
            selectedProducts: modifiedList,
          }));
        } else {
          set(() => ({
            selectedProducts: [...selectedProducts, product],
          }));
        }
      },
      increment: (product: Product) => {
        const selectedProducts = get().selectedProducts;
        const modifiedList = updateProductAmount(product, selectedProducts, 1);

        set(() => ({
          selectedProducts: modifiedList,
        }));
      },
      decrement: (product: Product) => {
        const selectedProducts = get().selectedProducts;
        const modifiedList = updateProductAmount(product, selectedProducts, -1);

        set(() => ({
          selectedProducts: modifiedList,
        }));
      },
      removeProductCart: () => {},
      clearCart: () => {
        set(() => ({
          selectedProducts: [],
        }));
      },
      calcPayment: () => {
        const selectedProducts = get().selectedProducts;

        const subTotal = selectedProducts.reduce(
          (acc, item) => acc + Number(item.price) * item.amount,
          0
        );

        const total = selectedProducts.reduce(
          (acc, item) => acc + Number(item.price) * item.amount + 40,
          0
        );

        return {
          freteValue: 40,
          subTotalValue: subTotal,
          totalValue: total,
        };
      },
      appendAddress: (address: IViaCEP) => {
        set(() => ({
          address,
        }));
      },
    }),
    {
      name: "storage:order",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
