import { describe, it, expect } from "vitest";
import { formatCurrency } from "./formatCurrency";

describe("formatCurrency", () => {
  it("formats a decimal amount with comma and two decimals", () => {
    expect(formatCurrency(1234.5)).toBe("£1,234.50");
  });

  it("handles whole numbers", () => {
    expect(formatCurrency(1000)).toBe("£1,000.00");
  });

  it("handles zeros", () => {
    expect(formatCurrency(0)).toBe("£0.00");
  });

  it("handles big numbers", () => {
    expect(formatCurrency(1000000)).toBe("£1,000,000.00");
  });

  it("handles numbers below 1", () => {
    expect(formatCurrency(0.5)).toBe("£0.50");
  });

  it("handles negative numbers", () => {
    expect(formatCurrency(-1000)).toBe("-£1,000.00");
  });

  it("handles more than 2 decimals", () => {
    expect(formatCurrency(1.235)).toBe("£1.24");
  });

  it("handles negative zeros", () => {
    expect(formatCurrency(-0)).toBe("-£0.00");
  });

  it("handles NaN", () => {
    expect(formatCurrency(NaN)).toBe("£NaN");
  });
});