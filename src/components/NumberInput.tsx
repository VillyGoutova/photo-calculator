import React from 'react';
import { InfoButton } from './InfoButton';
import { validateNumber } from '../utils/validation';

export interface NumberInputProps {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  suffix?: string;
  infoId?: string;
  onToggleInfo?: (id: string) => void;
  isInfoOpen?: boolean;
  validator?: (value: string | number) => number;
  className?: string;
}

/**
 * Reusable number input component with validation and info tooltip support
 */
export function NumberInput({
  id,
  label,
  value,
  onChange,
  min = 0,
  max,
  suffix,
  infoId,
  onToggleInfo,
  isInfoOpen = false,
  validator,
  className = 'form-control middle-width',
}: NumberInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = validator
      ? validator(e.target.value)
      : validateNumber(e.target.value, { min, max });
    onChange(newValue);
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      {infoId && onToggleInfo && (
        <InfoButton
          id={infoId}
          onToggle={onToggleInfo}
          isOpen={isInfoOpen}
        />
      )}
      <div className="input-group">
        <input
          type="number"
          min={min}
          max={max}
          className={className}
          id={id}
          value={value || ''}
          onChange={handleChange}
        />
        {suffix && <span className="input-group-text">{suffix}</span>}
      </div>
    </>
  );
}

