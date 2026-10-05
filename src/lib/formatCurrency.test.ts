import { describe, it, expect } from "vitest";
import { formatCurrency } from "./formatCurrency";

describe("formatCurrency", () => {
  it("formats a decimal amount with comma and two decimals", () => {
    expect(formatCurrency(1234.5)).toBe("£1,234.50");
  });

  it("adds .00 to whole numbers", () => {
    expect(formatCurrency(1000)).toBe("£1,000.00");
  });

  it("adds .00 to zeros", () => {
    expect(formatCurrency(0)).toBe("£0.00");
  });

  it("adds commas to large numbers", () => {
    expect(formatCurrency(1000000)).toBe("£1,000,000.00");
  });

  it("shows a leading zero for amounts under £1", () => {
    expect(formatCurrency(0.5)).toBe("£0.50");
  });

  it("puts the minus sign before the £", () => {
    expect(formatCurrency(-1000)).toBe("-£1,000.00");
  });

  it("rounds to two decimal places", () => {
    expect(formatCurrency(1.235)).toBe("£1.24");
  });

  it("removes the minus sign for negative zero", () => {
    expect(formatCurrency(-0)).toBe("£0.00");
  });

  it("throws an error for NaN", () => {
    expect(() => formatCurrency(NaN)).toThrow();
  });

  it("throws an error for Infinity", () => {
    expect(() => formatCurrency(Infinity)).toThrow();
  });

  it("throws an error for -Infinity", () => {
    expect(() => formatCurrency(-Infinity)).toThrow();
  });
});