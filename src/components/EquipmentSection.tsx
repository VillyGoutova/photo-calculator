import React from 'react';
import { Equipment, EQUIPMENT_DEPRECIATION } from '../types';
import { InfoButton, InfoRow } from './InfoButton';
import { validateMonetary } from '../utils/validation';
import { EQUIPMENT_FIELDS } from '../constants/equipmentFields';
import { MAX_MONETARY_VALUE } from '../constants/validationConstants';

interface EquipmentSectionProps {
  equipment: Equipment;
  equipmentSum: number;
  equipmentPerYear: number;
  onUpdate: (updates: Partial<Equipment>) => void;
  onToggleInfo: (id: string) => void;
  openInfo: Set<string>;
}

export function EquipmentSection({
  equipment,
  equipmentSum,
  equipmentPerYear,
  onUpdate,
  onToggleInfo,
  openInfo,
}: EquipmentSectionProps) {

  return (
    <>
      <h3 className="mb-5 alert alert-dark">Техника</h3>
      <p>
        Разходите за фотографска техника са основно перо във всяка фотографска
        дейност. Всеки вид техника има период на амортизация или период, след
        който ще трябва да я замените с нова. След като попълните секцията
        техника ще получите средния ви годишен разход за поддържане на техниката,
        с която разполагате и възможността за закупуване на нова.
      </p>
      <div className="table-responsive">
        <table className="table table-hover w-100">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col th-sm">Стойност</th>
              <th scope="col">
                Амортизация
                <br />
                в години
              </th>
              <th scope="col" className="text-right">
                Стойност
                <br />
                за година
              </th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {EQUIPMENT_FIELDS.map((field) => {
              const value = equipment[field.key];
              const depreciation = EQUIPMENT_DEPRECIATION[field.key];
              // Safe division: depreciation is always >= 1 from EQUIPMENT_DEPRECIATION constant
              const yearlyValue = depreciation > 0 ? value / depreciation : 0;

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
                    <td>{depreciation}</td>
                    <td className="text-right">
                      {yearlyValue.toFixed(2)} лв
                    </td>
                    <td></td>
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
                <h4>Обща сума:</h4>
              </th>
              <td>
                <h4>{equipmentSum.toFixed(2)} лв.</h4>
              </td>
              <td colSpan={3}></td>
            </tr>
            <tr className="table-info">
              <th scope="col">
                <h4>Разход за 1 година:</h4>
              </th>
              <td>
                <h4>{equipmentPerYear.toFixed(2)} лв.</h4>
              </td>
              <td colSpan={3}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

