import { useMemo, useState } from "react";
import { LayoutProps } from "styled-system";

import { Container } from "./styles";
import { TextInputMask, TextInputMaskProps } from "react-native-masked-text";
import { FieldValues, useController } from "react-hook-form";
import { IInputProps } from "../defaultSettings";

interface IInputMaskProps<T extends FieldValues = FieldValues>
  extends IInputProps<T>,
    TextInputMaskProps {
  containerProps?: LayoutProps;
  placeholder: string;
}

export const Mask = <T extends FieldValues>({
  containerProps,
  placeholder,
  type,
  form,
  name,
  ...rest
}: IInputMaskProps<T>) => {
  const { field } = useController<T>({
    name,
    control: form.control,
  });

  const { error } = useMemo(() => {
    return form.getFieldState(name);
  }, [form.formState.errors]);

  return (
    <>
      <Container {...containerProps}>
        <TextInputMask
          type={type}
          value={field.value}
          placeholder={placeholder}
          {...rest}
          onChangeText={(text) => {
            rest.onChangeText?.(text);
            field.onChange(text);
          }}
        />
      </Container>
    </>
  );
};
