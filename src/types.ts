export interface Equipment {
  camera: number;
  lens: number;
  cards: number;
  battery: number;
  bag: number;
  tripod: number;
  filter: number;
  studioLights: number;
  lightStands: number;
  lightModifiers: number;
  flash: number;
  hardDisk: number;
  computer: number;
  software: number;
  other: number;
}

export interface EquipmentDepreciation {
  camera: number;
  lens: number;
  cards: number;
  battery: number;
  bag: number;
  tripod: number;
  filter: number;
  studioLights: number;
  lightStands: number;
  lightModifiers: number;
  flash: number;
  hardDisk: number;
  computer: number;
  software: number;
  other: number;
}

export interface YearlyExpenses {
  rentStudio: number;
  repairStudio: number;
  phone: number;
  internet: number;
  electricity: number;
  officeSupplies: number;
  website: number;
  hosting: number;
  domain: number;
  ads: number;
  accountant: number;
  lawyer: number;
  training: number;
  insurance: number;
  repairEquipment: number;
  transport: number;
  credits: number;
  other: number;
  investment: number;
  photoworld: number;
}

export interface TimeInvestment {
  hourPerWeek: number;
  weekPerYear: number;
  timeBusiness: number;
  timeClients: number;
  timeRetouch: number;
}

export interface Assignment {
  hour: number;
  studioRent: number;
  equipmentRent: number;
  lightingRent: number;
  makeupArtist: number;
  hairdresser: number;
  stylist: number;
  assistant: number;
  model: number;
  transport: number;
  decor: number;
  retouch: number;
  authorsRights: number;
}

export interface CalculatorState {
  equipment: Equipment;
  yearlyExpenses: YearlyExpenses;
  salary: number;
  otherIncome: number;
  timeInvestment: TimeInvestment;
  profit: number;
  assignment: Assignment;
}

export const DEFAULT_EQUIPMENT: Equipment = {
  camera: 5000,
  lens: 8000,
  cards: 500,
  battery: 300,
  bag: 200,
  tripod: 300,
  filter: 0,
  studioLights: 0,
  lightStands: 0,
  lightModifiers: 0,
  flash: 900,
  hardDisk: 500,
  computer: 5000,
  software: 240,
  other: 0,
};

export const EQUIPMENT_DEPRECIATION: EquipmentDepreciation = {
  camera: 3,
  lens: 5,
  cards: 2,
  battery: 2,
  bag: 3,
  tripod: 5,
  filter: 3,
  studioLights: 5,
  lightStands: 5,
  lightModifiers: 5,
  flash: 3,
  hardDisk: 2,
  computer: 2,
  software: 1,
  other: 3,
};

export const DEFAULT_YEARLY_EXPENSES: YearlyExpenses = {
  rentStudio: 6000,
  repairStudio: 1000,
  phone: 600,
  internet: 360,
  electricity: 2000,
  officeSupplies: 500,
  website: 1000,
  hosting: 80,
  domain: 20,
  ads: 2400,
  accountant: 600,
  lawyer: 300,
  training: 2000,
  insurance: 0,
  repairEquipment: 500,
  transport: 3600,
  credits: 0,
  other: 0,
  investment: 0,
  photoworld: 360,
};

export const DEFAULT_TIME_INVESTMENT: TimeInvestment = {
  hourPerWeek: 40,
  weekPerYear: 50,
  timeBusiness: 20,
  timeClients: 20,
  timeRetouch: 40,
};

export const DEFAULT_ASSIGNMENT: Assignment = {
  hour: 5,
  studioRent: 300,
  equipmentRent: 250,
  lightingRent: 250,
  makeupArtist: 200,
  hairdresser: 200,
  stylist: 350,
  assistant: 250,
  model: 500,
  transport: 250,
  decor: 300,
  retouch: 150,
  authorsRights: 0,
};




