export const getDecimalPart = (number) => {
  if (Number.isInteger(number)) return 0;
  const decimal = number.toString().split(".")[1];

  return Number(decimal);
};
