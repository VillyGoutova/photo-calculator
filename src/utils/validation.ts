/**
 * Input validation utilities for secure numeric input handling
 */

import {
  MAX_MONETARY_VALUE,
  MAX_TIME_VALUE,
  MAX_PERCENTAGE,
} from '../constants/validationConstants';

export interface ValidationOptions {
  min?: number;
  max?: number;
  allowNegative?: boolean;
  allowZero?: boolean;
  defaultValue?: number;
}

/**
 * Validates and sanitizes numeric input from form fields
 * 
 * @param value - The input value to validate (string or number)
 * @param options - Validation options
 * @returns A valid number within the specified bounds
 */
export function validateNumber(
  value: string | number,
  options: ValidationOptions = {}
): number {
  const {
    min = 0,
    max = Number.MAX_SAFE_INTEGER,
    allowNegative = false,
    allowZero = true,
    defaultValue = 0,
  } = options;

  // Convert to number if string
  const num = typeof value === 'string' ? parseFloat(value) : value;

  // Handle NaN
  if (isNaN(num)) {
    return defaultValue;
  }

  // Handle Infinity
  if (!isFinite(num)) {
    return max;
  }

  // Handle negative values
  if (!allowNegative && num < 0) {
    return defaultValue;
  }

  // Handle zero
  if (!allowZero && num === 0) {
    return min > 0 ? min : defaultValue;
  }

  // Apply bounds
  if (num < min) {
    return min;
  }

  if (num > max) {
    return max;
  }

  return num;
}

/**
 * Validates percentage input (0-100)
 */
export function validatePercentage(value: string | number): number {
  return validateNumber(value, {
    min: 0,
    max: MAX_PERCENTAGE,
    allowNegative: false,
    allowZero: true,
    defaultValue: 0,
  });
}

/**
 * Validates monetary input (non-negative, reasonable max)
 */
export function validateMonetary(value: string | number): number {
  return validateNumber(value, {
    min: 0,
    max: MAX_MONETARY_VALUE,
    allowNegative: false,
    allowZero: true,
    defaultValue: 0,
  });
}

/**
 * Validates time input (hours, weeks, etc.)
 */
export function validateTime(value: string | number): number {
  return validateNumber(value, {
    min: 0,
    max: MAX_TIME_VALUE,
    allowNegative: false,
    allowZero: false, // Time should be > 0
    defaultValue: 1,
  });
}

