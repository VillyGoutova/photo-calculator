import {
  Equipment,
  EquipmentDepreciation,
  YearlyExpenses,
  TimeInvestment,
  Assignment,
  EQUIPMENT_DEPRECIATION,
} from '../types';
import {
  SOCIAL_SECURITY_RATE,
  TAX_RATE,
  HOURS_PER_DAY,
  PERCENTAGE_MAX,
  PERCENTAGE_DIVISOR,
} from '../constants/calculationConstants';

/**
 * Safely ensures a number is finite, returning 0 for NaN/Infinity
 */
function safeNumber(value: number): number {
  if (!isFinite(value) || isNaN(value)) {
    return 0;
  }
  return value;
}

export function calculateEquipmentSum(equipment: Equipment): number {
  const sum = Object.values(equipment).reduce((acc, val) => acc + val, 0);
  return safeNumber(sum);
}

export function calculateEquipmentPerYear(
  equipment: Equipment,
  depreciation: EquipmentDepreciation = EQUIPMENT_DEPRECIATION
): number {
  // Ensure depreciation values are safe (never zero)
  const safeDepreciation = {
    camera: Math.max(1, depreciation.camera),
    lens: Math.max(1, depreciation.lens),
    cards: Math.max(1, depreciation.cards),
    battery: Math.max(1, depreciation.battery),
    bag: Math.max(1, depreciation.bag),
    tripod: Math.max(1, depreciation.tripod),
    filter: Math.max(1, depreciation.filter),
    studioLights: Math.max(1, depreciation.studioLights),
    lightStands: Math.max(1, depreciation.lightStands),
    lightModifiers: Math.max(1, depreciation.lightModifiers),
    flash: Math.max(1, depreciation.flash),
    hardDisk: Math.max(1, depreciation.hardDisk),
    computer: Math.max(1, depreciation.computer),
    software: Math.max(1, depreciation.software),
    other: Math.max(1, depreciation.other),
  };

  const result = (
    equipment.camera / safeDepreciation.camera +
    equipment.lens / safeDepreciation.lens +
    equipment.cards / safeDepreciation.cards +
    equipment.battery / safeDepreciation.battery +
    equipment.bag / safeDepreciation.bag +
    equipment.tripod / safeDepreciation.tripod +
    equipment.filter / safeDepreciation.filter +
    equipment.studioLights / safeDepreciation.studioLights +
    equipment.lightStands / safeDepreciation.lightStands +
    equipment.lightModifiers / safeDepreciation.lightModifiers +
    equipment.flash / safeDepreciation.flash +
    equipment.hardDisk / safeDepreciation.hardDisk +
    equipment.computer / safeDepreciation.computer +
    equipment.software / safeDepreciation.software +
    equipment.other / safeDepreciation.other
  );
  return safeNumber(result);
}

export function calculateYearlyCosts(
  equipmentPerYear: number,
  yearlyExpenses: YearlyExpenses
): number {
  const expensesSum = Object.values(yearlyExpenses).reduce((acc, val) => acc + val, 0);
  return safeNumber(equipmentPerYear + expensesSum);
}

export function calculateSocialSecurity(salary: number): number {
  return safeNumber(salary * SOCIAL_SECURITY_RATE);
}

export function calculateTaxes(salary: number): number {
  return safeNumber(salary * TAX_RATE);
}

export function calculateTotalYearlyCosts(
  yearlyCosts: number,
  salary: number,
  socialSecurity: number,
  taxes: number
): number {
  return safeNumber(yearlyCosts + salary + socialSecurity + taxes);
}

export function calculateTimeShooting(timeInvestment: TimeInvestment): number {
  const shooting =
    PERCENTAGE_MAX -
    timeInvestment.timeBusiness -
    timeInvestment.timeClients -
    timeInvestment.timeRetouch;
  return shooting < 0 ? 0 : shooting;
}

export function calculateHoursShooting(timeInvestment: TimeInvestment): number {
  const timeShooting = calculateTimeShooting(timeInvestment);
  const hoursPerWeek = safeNumber(timeInvestment.hourPerWeek);
  const weeksPerYear = safeNumber(timeInvestment.weekPerYear);
  const result = hoursPerWeek * weeksPerYear * (timeShooting / PERCENTAGE_DIVISOR);
  return safeNumber(result);
}

export function calculatePricePerHour(
  totalYearlyCosts: number,
  otherIncome: number,
  timeInvestment: TimeInvestment
): number {
  const hoursShooting = calculateHoursShooting(timeInvestment);

  if (hoursShooting === 0 || !isFinite(hoursShooting)) return 0;

  const result = (totalYearlyCosts - otherIncome) / hoursShooting;
  return safeNumber(result);
}

export function calculatePricePerDay(pricePerHour: number): number {
  return safeNumber(pricePerHour * HOURS_PER_DAY);
}

export function calculatePricePerHourWithProfit(
  pricePerHour: number,
  profit: number
): number {
  return safeNumber(pricePerHour * ((profit + PERCENTAGE_MAX) / PERCENTAGE_DIVISOR));
}

export function calculatePricePerDayWithProfit(
  pricePerHourWithProfit: number
): number {
  return safeNumber(pricePerHourWithProfit * HOURS_PER_DAY);
}

export function calculateAssignmentPhotographerFee(
  pricePerHourWithProfit: number,
  assignmentHours: number
): number {
  const safeHours = safeNumber(assignmentHours);
  return safeNumber(pricePerHourWithProfit * safeHours);
}

export function calculateAssignmentPrice(
  assignment: Assignment,
  photographerFee: number
): number {
  const assignmentSum = Object.values(assignment).reduce((acc, val) => acc + val, 0);
  return safeNumber(assignmentSum + photographerFee);
}




