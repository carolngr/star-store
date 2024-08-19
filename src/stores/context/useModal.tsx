import theme from "@theme/index";
import { Modal, NativeBaseProvider } from "native-base";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { Dimensions, Text } from "react-native";
import { ThemeProvider } from "styled-components/native";

interface IModalProps {
  body: any;
}
interface IModalProviderProps {
  openModal: (props: IModalProps) => void;
  closeModal: () => void;
}

const modalContext = createContext<IModalProviderProps>(
  {} as IModalProviderProps
);

const { width } = Dimensions.get("window");

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modalState, setModalState] = useState<IModalProps | null>(null);

  const openModal = (props: IModalProps) => {
    setModalState(props);
  };

  const closeModal = () => {
    setModalState(null);
  };

  return (
    <NativeBaseProvider>
      <modalContext.Provider value={{ closeModal, openModal }}>
        {children}
        <Modal isOpen={!!modalState} onClose={closeModal} safeAreaTop={true}>
          <Modal.Content width={width}>
            <ThemeProvider theme={theme}>{modalState?.body}</ThemeProvider>
          </Modal.Content>
        </Modal>
      </modalContext.Provider>
    </NativeBaseProvider>
  );
};

export const useModal = () => {
  const context = useContext(modalContext);
  return context;
};
