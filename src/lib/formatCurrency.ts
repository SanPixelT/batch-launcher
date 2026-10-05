export function formatCurrency(amount: number): string {
  if (Number.isNaN(amount)) {
    throw new Error("Amount must be a valid number, got NaN");
  }

  const formatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    signDisplay: "negative",
  });

  return formatter.format(amount);
}
