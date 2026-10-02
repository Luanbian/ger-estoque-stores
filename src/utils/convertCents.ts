const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const convertToCents = (value: string): number => {
  const floatValue = parseFloat(value);
  return isNaN(floatValue) ? 0 : Math.round(floatValue * 100);
};

export const convertFromCents = (value: number): string => {
  return currencyFormatter.format(value / 100);
};
