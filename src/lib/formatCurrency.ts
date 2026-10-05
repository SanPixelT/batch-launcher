export function formatCurrency(amount: number): string {
  if (!Number.isFinite(amount)) {
    throw new Error("Amount must be a finite number, got ${amount}");
  }

  const formatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    signDisplay: "negative",
  });

  return formatter.format(amount);
}
