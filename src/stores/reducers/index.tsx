import { create } from "zustand";
import { Actions, Product, State } from "./types";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

const defaultState: State = {
  selectedProducts: [],
  count: 0,
};

const validationProductExists = (
  productTitle: string,
  selectedProducts: Product[]
) => {
  return selectedProducts.find((product) => product.title === productTitle);
};

const updateProductAmount = (
  item: Product,
  selectedProducts: Product[],
  amount: number
) => {
  const modifiedList = selectedProducts.map((product) => {
    if (product.title === item.title) {
      if (amount < 0) {
        return product;
      }

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
          product.title,
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
          (acc, item) => acc + item.price * item.amount,
          0
        );

        const total = selectedProducts.reduce(
          (acc, item) => acc + item.price * item.amount + 40,
          0
        );

        console.log(total);

        return {
          freteValue: 40,
          subTotalValue: subTotal,
          totalValue: total,
        };
      },
    }),
    {
      name: "storage:order",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
