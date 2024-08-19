export const formatCurrency = (value: number) => {
  if (!value) return "";
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value ?? 0);
};
