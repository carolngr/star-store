import * as yup from "yup";

export const cartSchema = yup.object().shape({
  title: yup.string().required("O campo de titular é obrigatório"),
  number: yup.string().required("O campo de number é obrigatório"),
  valid_date: yup.string().required("O campo de validade é obrigatório"),
  cvv: yup.number().required("O campo de cvv é obrigatório"),
});
