import React, { useMemo } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { Container } from "./styles";
import { LayoutProps } from "styled-system";
import { FieldValues, useController } from "react-hook-form";
import { IInputProps } from "../defaultSettings";
import { Error } from "@components/atomos/Error";

interface ITextnputProps<T extends FieldValues = FieldValues>
  extends TextInputProps,
    IInputProps<T> {
  inputRef?: React.RefObject<TextInput>;
  placeholder: string;
  containerProps?: LayoutProps;
}

export function Text<T extends FieldValues>({
  inputRef,
  placeholder,
  containerProps,
  form,
  name,
  ...rest
}: ITextnputProps<T>) {
  const { field } = useController<T>({
    name,
    control: form.control,
  });
  const { formState } = form;

  const { error } = useMemo(() => {
    return form.getFieldState(name);
  }, [form]);

  return (
    <View>
      <Container {...containerProps}>
        <TextInput
          ref={inputRef}
          placeholder={placeholder}
          value={field.value}
          onChangeText={field.onChange}
          {...rest}
        />
      </Container>
      <Error text={error?.message} />
    </View>
  );
}
