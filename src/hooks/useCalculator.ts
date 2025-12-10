import { useState, useMemo } from 'react';
import {
  CalculatorState,
  DEFAULT_EQUIPMENT,
  DEFAULT_YEARLY_EXPENSES,
  DEFAULT_TIME_INVESTMENT,
  DEFAULT_ASSIGNMENT,
} from '../types';
import {
  calculateEquipmentSum,
  calculateEquipmentPerYear,
  calculateYearlyCosts,
  calculateSocialSecurity,
  calculateTaxes,
  calculateTotalYearlyCosts,
  calculateTimeShooting,
  calculateHoursShooting,
  calculatePricePerHour,
  calculatePricePerDay,
  calculatePricePerHourWithProfit,
  calculatePricePerDayWithProfit,
  calculateAssignmentPhotographerFee,
  calculateAssignmentPrice,
} from '../utils/calculations';

export function useCalculator() {
  const [state, setState] = useState<CalculatorState>({
    equipment: DEFAULT_EQUIPMENT,
    yearlyExpenses: DEFAULT_YEARLY_EXPENSES,
    salary: 24000,
    otherIncome: 0,
    timeInvestment: DEFAULT_TIME_INVESTMENT,
    profit: 20,
    assignment: DEFAULT_ASSIGNMENT,
  });

  const calculations = useMemo(() => {
    const equipmentSum = calculateEquipmentSum(state.equipment);
    const equipmentPerYear = calculateEquipmentPerYear(state.equipment);
    const yearlyCosts = calculateYearlyCosts(equipmentPerYear, state.yearlyExpenses);
    const socialSecurity = calculateSocialSecurity(state.salary);
    const taxes = calculateTaxes(state.salary);
    const totalYearlyCosts = calculateTotalYearlyCosts(
      yearlyCosts,
      state.salary,
      socialSecurity,
      taxes
    );
    const timeShooting = calculateTimeShooting(state.timeInvestment);
    const hoursShooting = calculateHoursShooting(state.timeInvestment);
    const pricePerHour = calculatePricePerHour(
      totalYearlyCosts,
      state.otherIncome,
      state.timeInvestment
    );
    const pricePerDay = calculatePricePerDay(pricePerHour);
    const pricePerHourWithProfit = calculatePricePerHourWithProfit(
      pricePerHour,
      state.profit
    );
    const pricePerDayWithProfit = calculatePricePerDayWithProfit(
      pricePerHourWithProfit
    );
    const assignmentPhotographerFee = calculateAssignmentPhotographerFee(
      pricePerHourWithProfit,
      state.assignment.hour
    );
    const assignmentPrice = calculateAssignmentPrice(
      state.assignment,
      assignmentPhotographerFee
    );

    return {
      equipmentSum,
      equipmentPerYear,
      yearlyCosts,
      socialSecurity,
      taxes,
      totalYearlyCosts,
      timeShooting,
      hoursShooting,
      pricePerHour,
      pricePerDay,
      pricePerHourWithProfit,
      pricePerDayWithProfit,
      assignmentPhotographerFee,
      assignmentPrice,
    };
  }, [state]);

  /**
   * Generic helper to update nested state objects
   */
  const updateNestedState = <K extends keyof CalculatorState>(
    key: K,
    updates: Partial<CalculatorState[K]>
  ) => {
    setState((prev) => {
      const currentValue = prev[key];
      if (typeof currentValue === 'object' && currentValue !== null && !Array.isArray(currentValue)) {
        return {
          ...prev,
          [key]: { ...currentValue, ...updates },
        };
      }
      return prev;
    });
  };

  const updateEquipment = (updates: Partial<CalculatorState['equipment']>) => {
    updateNestedState('equipment', updates);
  };

  const updateYearlyExpenses = (
    updates: Partial<CalculatorState['yearlyExpenses']>
  ) => {
    updateNestedState('yearlyExpenses', updates);
  };

  const updateTimeInvestment = (
    updates: Partial<CalculatorState['timeInvestment']>
  ) => {
    updateNestedState('timeInvestment', updates);
  };

  const updateAssignment = (updates: Partial<CalculatorState['assignment']>) => {
    updateNestedState('assignment', updates);
  };

  return {
    state,
    calculations,
    updateEquipment,
    updateYearlyExpenses,
    updateTimeInvestment,
    updateAssignment,
    setSalary: (salary: number) => setState((prev) => ({ ...prev, salary })),
    setOtherIncome: (otherIncome: number) =>
      setState((prev) => ({ ...prev, otherIncome })),
    setProfit: (profit: number) => setState((prev) => ({ ...prev, profit })),
  };
}




