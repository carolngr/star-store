import * as yup from "yup";

export const loginSchema = yup.object().shape({
  name: yup
    .string()
    .required("O campo de nome é obrigatório")
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .max(50, "O nome deve ter no máximo 50 caracteres"),
  email: yup
    .string()
    .email("Insira um email válido")
    .required("O campo de email é obrigatório"),
});
