function calculateEmi(principle, months, annualInterestRate) {
  if (!principle || !months || principle < 0 || months < 0) {
    return 0;
  }

  if (!annualInterestRate) {
    return Math.round(principle / months);
  }

  const monthlyRate = annualInterestRate / 12 / 100;
  const factor = Math.pow(1 + monthlyRate, months);
  const emi = (principle * monthlyRate * factor) / (factor - 1);
  return Math.round(emi);
}

function formatINR(amount) {
  if (amount == null || isNaN(amount)) return '\u20B90';
  return '\u20B9' + Math.round(amount).toLocaleString('en-IN');``
}

export { calculateEmi, formatINR };