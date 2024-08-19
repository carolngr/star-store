import * as yup from "yup";

export const registrationSchema = yup.object().shape({
  name: yup
    .string()
    .required("O campo de nome é obrigatório")
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .max(50, "O nome deve ter no máximo 50 caracteres"),
  email: yup
    .string()
    .email("Insira um email válido")
    .required("O campo de email é obrigatório"),
  password: yup
    .string()
    .required("O campo de senha é obrigatório")
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .matches(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
    .matches(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
    .matches(/\d/, "A senha deve conter pelo menos um número")
    .matches(
      /[@$!%*?&]/,
      "A senha deve conter pelo menos um caractere especial"
    ),
});
