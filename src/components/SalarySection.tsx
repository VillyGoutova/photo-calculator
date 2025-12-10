import { InfoButton, InfoRow } from './InfoButton';
import { validateMonetary } from '../utils/validation';
import { MAX_MONETARY_VALUE } from '../constants/validationConstants';

interface SalarySectionProps {
  salary: number;
  socialSecurity: number;
  taxes: number;
  onSalaryChange: (salary: number) => void;
  onToggleInfo: (id: string) => void;
  openInfo: Set<string>;
}

export function SalarySection({
  salary,
  socialSecurity,
  taxes,
  onSalaryChange,
  onToggleInfo,
  openInfo,
}: SalarySectionProps) {
  return (
    <>
      <h3 className="mb-5 mt-5 alert alert-dark">Заплата</h3>
      <p>
        Дотук сметнахме всичко, което е нужно да осигурите, за да може да
        практикувате спокойно професията фотограф. В тази секция на калкулатора
        трябва да определите заплатата си. Това са парите, които остават лично
        за вас. С тях трябва да можете да се храните, да пътувате да си купувате
        и плащате всичко онова, от което имате нужда, което не е пряко свързано
        с фотографската ви дейност. Въведете годишната си заплата.
      </p>
      <div className="table-responsive">
        <table className="table table-hover w-100">
          <tbody>
            <tr>
              <th scope="col">
                <label htmlFor="salary">Заплата</label>
              </th>
              <td>
                <div className="input-group">
                  <input
                    type="number"
                    min="0"
                    max={MAX_MONETARY_VALUE}
                    className="form-control middle-width"
                    id="salary"
                    value={salary || ''}
                    onChange={(e) =>
                      onSalaryChange(validateMonetary(e.target.value))
                    }
                  />
                  <span className="input-group-text">лв.</span>
                </div>
              </td>
              <td colSpan={3}></td>
            </tr>
            <tr className="table-info">
              <th scope="col">Осигуровки</th>
              <td>{socialSecurity.toFixed(2)} лв.</td>
              <td colSpan={3}></td>
            </tr>
            <tr className="table-warning">
              <th scope="col">
                Данъци
                <InfoButton
                  id="yearlytaxes"
                  onToggle={onToggleInfo}
                  isOpen={openInfo.has('yearlytaxes')}
                />
              </th>
              <td>{taxes.toFixed(2)} лв.</td>
              <td colSpan={3}></td>
            </tr>
            <InfoRow id="yearlytaxes" isOpen={openInfo.has('yearlytaxes')}>
              Сумата за данъци тук е ориентировъчна. Тя зависи от множество
              различни фактори. Важното е да знаете, че няма как да се мине без
              тях. За съвсем точна сметка, се консултирайте с вашия счетоводител.
            </InfoRow>
          </tbody>
        </table>
      </div>
    </>
  );
}




