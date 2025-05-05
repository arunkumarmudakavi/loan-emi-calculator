export const useCalculateEMI = (principal, annualRate, months) => {
  const monthlyRate = annualRate / 12 / 100;

  if (monthlyRate === 0) return principal / months;

  const EMI =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      Math.pow(1 + monthlyRate, months) -
    1;

  return EMI;
};
