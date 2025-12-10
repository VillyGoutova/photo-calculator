import React from 'react';
import { Assignment } from '../types';
import { InfoButton, InfoRow } from './InfoButton';
import { validateTime, validateMonetary } from '../utils/validation';
import { ASSIGNMENT_FIELDS } from '../constants/assignmentFields';
import { MAX_MONETARY_VALUE, MAX_TIME_VALUE } from '../constants/validationConstants';

interface AssignmentSectionProps {
  assignment: Assignment;
  photographerFee: number;
  assignmentPrice: number;
  onUpdate: (updates: Partial<Assignment>) => void;
  onToggleInfo: (id: string) => void;
  openInfo: Set<string>;
}

export function AssignmentSection({
  assignment,
  photographerFee,
  assignmentPrice,
  onUpdate,
  onToggleInfo,
  openInfo,
}: AssignmentSectionProps) {

  return (
    <>
      <h3 className="mb-5 mt-5 alert alert-dark">
        Цена за конкретен фотографски ангажимент
      </h3>
      <p>
        Резултатите, които получихме по-горе показват каква е цената на 1
        снимачен час и 1 снимачен ден, само за вашия труд, с оборудването, което
        разполагате. Тези сметки не покриват сметките по конкретен фотографски
        ангажимент, който изисква по-голям екип или специфични допълнителни
        единични разходи. За подобни сметки може да ползвате полетата по-долу.
      </p>
      <div className="table-responsive">
        <table className="table table-hover w-100">
          <tbody>
            <tr className="table-light">
              <th scope="col">
                <label htmlFor={ASSIGNMENT_FIELDS[0].key}>
                  {ASSIGNMENT_FIELDS[0].label}
                </label>
                <InfoButton
                  id={ASSIGNMENT_FIELDS[0].infoId}
                  onToggle={onToggleInfo}
                  isOpen={openInfo.has(ASSIGNMENT_FIELDS[0].infoId)}
                />
              </th>
              <td>
                <div className="input-group">
                  <input
                    type="number"
                    min="0"
                    max={MAX_TIME_VALUE}
                    className="form-control middle-width"
                    id={ASSIGNMENT_FIELDS[0].key}
                    value={assignment.hour || ''}
                    onChange={(e) =>
                      onUpdate({
                        hour: validateTime(e.target.value),
                      })
                    }
                  />
                  <span className="input-group-text">ч.</span>
                </div>
              </td>
              <td colSpan={3}></td>
            </tr>
            {ASSIGNMENT_FIELDS[0].infoId && (
              <InfoRow
                id={ASSIGNMENT_FIELDS[0].infoId}
                isOpen={openInfo.has(ASSIGNMENT_FIELDS[0].infoId)}
              >
                {ASSIGNMENT_FIELDS[0].info}
              </InfoRow>
            )}
            <tr className="table-warning">
              <th scope="col">Фотографски хонорар</th>
              <td>{photographerFee.toFixed(2)} лв.</td>
              <td colSpan={3}></td>
            </tr>
            {ASSIGNMENT_FIELDS.slice(1).map((field) => {
              const value = assignment[field.key];

              return (
                <React.Fragment key={field.key}>
                  <tr className="table-light">
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
          </tbody>
        </table>
      </div>
      <h3 className="mb-5 mt-5 alert alert-dark">
        Резултата за конкретния фотографски ангажимент
      </h3>
      <div className="table-responsive">
        <table className="table table-hover w-100">
          <tbody>
            <tr className="table-success">
              <th scope="col">
                <h4>Крайна цена:</h4>
              </th>
              <td>
                <h4>{assignmentPrice.toFixed(2)} лв.</h4>
              </td>
              <td colSpan={3}></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Надяваме се, че този калкулатор ви е полезен. Постарахме се да направим
        лесен и в същото време максимално адекватен инструмент, който да помогне
        в изчисляването на цената на всеки фотографски ангажимент. Това е първата,
        работна версия на калкулатора. Ще се радваме да чуем вашата обратна
        връзка, идеи и препоръки, за да направим един още по-добър инструмент,
        който да служи като ориентир на снимащи и клиенти каква е реалната стойност
        на фотографските услуги. Може да се свържете с нас на{' '}
        <b>club@photoworld.bg</b>
      </p>
    </>
  );
}

