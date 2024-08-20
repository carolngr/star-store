import { useMutation } from "@tanstack/react-query";
import {
  ILoginProps,
  IRegisterProps,
  IUpdateRegisterProps,
  login,
  updateRegister,
} from ".";

export const useLogin = () =>
  useMutation({
    mutationKey: ["auth-login"],
    mutationFn: (body: ILoginProps) => login(body),
  });

export const useUpdateRegister = () =>
  useMutation({
    mutationKey: ["upadte-register-login"],
    mutationFn: (body: IUpdateRegisterProps) => updateRegister(body),
  });
