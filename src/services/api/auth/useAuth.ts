import { useMutation } from "@tanstack/react-query";
import { ILoginProps, login } from ".";

export const useLogin = () =>
  useMutation({
    mutationKey: ["aut-login"],
    mutationFn: (body: ILoginProps) => login(body),
  });
