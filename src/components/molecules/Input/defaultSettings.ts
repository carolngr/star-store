import { Path, FieldValues, UseFormReturn, FieldPath } from "react-hook-form";

export interface IInputProps<T extends FieldValues = FieldValues> {
  form: UseFormReturn<T, FieldValues>;
  name: FieldPath<T>;
  isLoading?: boolean;
}
