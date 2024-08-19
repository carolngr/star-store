export const formatDate = (date: string) => {
  if (!date) return "";
  const { format } = Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return format(new Date(date));
};
