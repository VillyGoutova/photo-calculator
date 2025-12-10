import React from 'react';
import { YearlyExpenses } from '../types';
import { InfoButton, InfoRow } from './InfoButton';
import { validateMonetary } from '../utils/validation';
import { EXPENSE_FIELDS } from '../constants/expenseFields';
import { MAX_MONETARY_VALUE } from '../constants/validationConstants';

interface YearlyExpensesSectionProps {
  yearlyExpenses: YearlyExpenses;
  equipmentPerYear: number;
  totalCosts: number;
  onUpdate: (updates: Partial<YearlyExpenses>) => void;
  onToggleInfo: (id: string) => void;
  openInfo: Set<string>;
}

export function YearlyExpensesSection({
  yearlyExpenses,
  equipmentPerYear,
  totalCosts,
  onUpdate,
  onToggleInfo,
  openInfo,
}: YearlyExpensesSectionProps) {

  return (
    <>
      <h3 className="mb-5 mt-5 alert alert-dark">Годишни разходи</h3>
      <p>
        Тук ще въведем всички други разходи, които правим, за да съществува
        нашата дейност. Всички суми, които въвеждате, трябва да са сметнати за 1
        година.
      </p>
      <div className="table-responsive">
        <table className="table table-hover w-100">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col th-sm">Стойност</th>
              <th scope="col" colSpan={3}></th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-warning">
              <th scope="col">Техника за 1 година</th>
              <td>{equipmentPerYear.toFixed(2)} лв.</td>
              <td colSpan={3}></td>
            </tr>
            {EXPENSE_FIELDS.map((field) => {
              const value = yearlyExpenses[field.key];

              return (
                <React.Fragment key={field.key}>
                  <tr>
                    <th scope="col">
                      <label htmlFor={field.key}>{field.label}</label>
                      {field.infoId && (
                        <InfoButton
                          id={field.infoId}
                          onToggle={onToggleInfo}
                          isOpen={openInfo.has(field.infoId)}
                        />
                      )}
                    </th>
                    <td>
                      <div className="input-group">
                        <input
                          type="number"
                          min="0"
                          max={MAX_MONETARY_VALUE}
                          className="form-control middle-width"
                          id={field.key}
                          value={value || ''}
                          onChange={(e) =>
                            onUpdate({
                              [field.key]: validateMonetary(e.target.value),
                            })
                          }
                        />
                        <span className="input-group-text">лв.</span>
                      </div>
                    </td>
                    <td colSpan={3}></td>
                  </tr>
                  {field.infoId && (
                    <InfoRow
                      id={field.infoId}
                      isOpen={openInfo.has(field.infoId)}
                    >
                      {field.info}
                    </InfoRow>
                  )}
                </React.Fragment>
              );
            })}
            <tr className="table-info">
              <th scope="col">
                <h4>Общо:</h4>
              </th>
              <td>
                <h4>{totalCosts.toFixed(2)} лв.</h4>
              </td>
              <td colSpan={3}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}




