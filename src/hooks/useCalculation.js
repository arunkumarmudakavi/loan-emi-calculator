export const useCalculateEMI = (principal, annualRate, years) => {
  const months = years * 12;
  const monthlyRate = annualRate / 12 / 100;

  let EMI;
  if (monthlyRate === 0) {
    EMI = principal / months;
  } else {
    EMI =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
  }

  let balance = principal;
  const schedule = [];

  for (let i = 1; i <= months; i++) {
    const interest = balance * monthlyRate;
    const principalPaid = EMI - interest;
    balance -= principalPaid;
    schedule.push({
      month: i,
      principal: principalPaid > 0 ? principalPaid : 0,
      interest: interest > 0 ? interest : 0,
      balance: balance > 0 ? balance : 0,
    });
  }


  return { EMI, schedule };
};
