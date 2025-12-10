/**
 * Formatting utilities for consistent number display
 */

/**
 * Formats a number as currency (Bulgarian Lev)
 * @param value - The number to format
 * @param decimals - Number of decimal places (default: 2)
 * @returns Formatted string like "1234.56 лв."
 */
export function formatCurrency(value: number, decimals: number = 2): string {
  return `${value.toFixed(decimals)} лв.`;
}

/**
 * Formats a number as percentage
 * @param value - The number to format
 * @param decimals - Number of decimal places (default: 0)
 * @returns Formatted string like "25%"
 */
export function formatPercentage(value: number, decimals: number = 0): string {
  return `${value.toFixed(decimals)}%`;
}

/**
 * Formats a number with specified decimal places
 * @param value - The number to format
 * @param decimals - Number of decimal places (default: 2)
 * @returns Formatted string
 */
export function formatNumber(value: number, decimals: number = 2): string {
  return value.toFixed(decimals);
}

