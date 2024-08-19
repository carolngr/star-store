import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Insira um email válido")
    .required("O campo de email é obrigatório"),
  password: yup.string().required("O campo de senha é obrigatório"),
});
