/**
 * Common types for field definitions
 */

export interface FieldDefinition<T extends string = string> {
  key: T;
  label: string;
  infoId: string;
  info: string;
}

