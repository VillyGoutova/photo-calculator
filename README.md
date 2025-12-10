# Photo Calculator

Calculator for the minimum cost of photographic work - React + TypeScript version

## About

This is a React + TypeScript rewrite of the original Vue.js photo calculator. It helps photographers calculate the minimum cost of their work by taking into account:

- Equipment costs and depreciation
- Yearly business expenses
- Salary and taxes
- Time investment
- Profit margins
- Assignment-specific costs

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Bootstrap 4** - CSS framework (for styling consistency with original)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This will start the development server, typically at `http://localhost:5173`

### Build

```bash
npm run build
```

This will create an optimized production build in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── AssignmentSection.tsx
│   ├── EquipmentSection.tsx
│   ├── InfoButton.tsx
│   ├── ResultsSection.tsx
│   ├── SalarySection.tsx
│   ├── TimeInvestmentSection.tsx
│   └── YearlyExpensesSection.tsx
├── hooks/              # Custom React hooks
│   └── useCalculator.ts
├── utils/              # Utility functions
│   └── calculations.ts
├── types.ts            # TypeScript type definitions
├── App.tsx             # Main application component
├── App.css             # Application styles
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## Features

- ✅ Equipment cost calculation with depreciation
- ✅ Yearly expenses tracking
- ✅ Salary, social security, and tax calculations
- ✅ Time investment analysis
- ✅ Hourly and daily rate calculations
- ✅ Profit margin calculations
- ✅ Assignment-specific pricing
- ✅ Interactive info tooltips
- ✅ Real-time calculations

## License

This project is maintained for Photoworld.bg
