import React, { useMemo, useState } from "react";
import {
  TextInput,
  TextInputProps,
  View,
  TouchableOpacity,
} from "react-native";
import { LayoutProps } from "styled-system";
import { FieldValues, useController } from "react-hook-form";
import { IInputProps } from "../defaultSettings";
import { Error } from "@components/atomos/Error";
import { Container } from "./styles";
import { Icons } from "@components/atomos/Icons";

interface IPasswordInputProps<T extends FieldValues = FieldValues>
  extends TextInputProps,
    IInputProps<T> {
  inputRef?: React.RefObject<TextInput>;
  placeholder: string;
  containerProps?: LayoutProps;
}

export function PasswordInput<T extends FieldValues>({
  inputRef,
  placeholder,
  containerProps,
  form,
  name,
  ...rest
}: IPasswordInputProps<T>) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const { field } = useController<T>({
    name,
    control: form.control,
  });

  const { error } = useMemo(() => {
    return form.getFieldState(name);
  }, [form.formState.errors]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View>
      <Container
        {...containerProps}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <TextInput
          ref={inputRef}
          placeholder={placeholder}
          value={field.value}
          onChangeText={field.onChange}
          secureTextEntry={!isPasswordVisible}
          style={{ flex: 1 }}
          {...rest}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Icons
            name={isPasswordVisible ? "eyeClosed" : "eye"}
            weight="bold"
            color="grey"
          />
        </TouchableOpacity>
      </Container>
      <Error text={error?.message} />
    </View>
  );
}
