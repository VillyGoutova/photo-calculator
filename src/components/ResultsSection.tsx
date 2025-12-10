import { InfoButton, InfoRow } from './InfoButton';
import { validateNumber } from '../utils/validation';
import { MAX_PROFIT_PERCENTAGE } from '../constants/validationConstants';

interface ResultsSectionProps {
  totalYearlyCosts: number;
  pricePerHour: number;
  pricePerDay: number;
  profit: number;
  pricePerHourWithProfit: number;
  pricePerDayWithProfit: number;
  onProfitChange: (profit: number) => void;
  onToggleInfo: (id: string) => void;
  openInfo: Set<string>;
}

export function ResultsSection({
  totalYearlyCosts,
  pricePerHour,
  pricePerDay,
  profit,
  pricePerHourWithProfit,
  pricePerDayWithProfit,
  onProfitChange,
  onToggleInfo,
  openInfo,
}: ResultsSectionProps) {
  return (
    <>
      <h3 className="mb-5 mt-5 alert alert-dark">Общи годишни разходи</h3>
      <p>
        По-долу виждате общата сума на годишните ви разходи, за да практикувате
        фотографската професия и да получавате заплащанета, което искате за нея.
      </p>
      <div className="table-responsive">
        <table className="table table-hover w-100">
          <tbody>
            <tr className="table-info">
              <th scope="col">
                <h4>Общи годишни разходи:</h4>
              </th>
              <td>
                <h4>{totalYearlyCosts.toFixed(2)} лв.</h4>
              </td>
              <td colSpan={3}></td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="mb-5 mt-5 alert alert-dark">Резултати за фотографския хонорар</h3>
      <p>
        Това са сумите, които трябва да взимате за всеки свой ангажимент, за да
        покривате всичките си разходи и да заделяте заплатата/печалбата, която
        искате да получавате. По-долу ще намерите цена за един час снимки, както
        и цена за един снимачен ден. Може да използвате цената, която ви се
        струва по-удачна спрямо конкретната фототграфска задача и времето, което
        тя ви отнема.
        <br />
        Ако ви се налага да ценообразувате на снимка, то преценете колко снимки
        може да заснемете за един час и разделете сумата за един час на това
        число.
        <br />
        Как ви се струват тези цени? Ниски? Високи? Може да разместите някои от
        параметрите по-горе и да видите как ще се променят резултатите, но имайте
        предвид, че ако всичко, което сте попълнили по-горе ви е нужно, а работите
        на по-ниски цени, то или работите на загуба или "изяждате" собствената си
        печалба.
      </p>
      <div className="table-responsive">
        <table className="table table-hover w-100">
          <tbody>
            <tr className="table-success">
              <th scope="col">
                <h4>Цена за 1 час снимане:</h4>
              </th>
              <td>
                <h4>{pricePerHour.toFixed(2)} лв.</h4>
              </td>
              <td colSpan={3}></td>
            </tr>
            <tr className="table-success">
              <th scope="col">
                <h4>Цена за 1 снимачен ден (от 8 часа):</h4>
              </th>
              <td>
                <h4>{pricePerDay.toFixed(2)} лв.</h4>
              </td>
              <td colSpan={3}></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table-responsive">
        <table className="table table-hover w-100">
          <tbody>
            <tr className="table-light">
              <th scope="col">
                <label htmlFor="profit">Определи своя % печалба</label>
                <InfoButton
                  id="profit"
                  onToggle={onToggleInfo}
                  isOpen={openInfo.has('profit')}
                />
              </th>
              <td>
                <div className="input-group">
                  <input
                    type="number"
                    min="0"
                    max={MAX_PROFIT_PERCENTAGE}
                    className="form-control middle-width"
                    id="profit"
                    value={profit || ''}
                    onChange={(e) =>
                      onProfitChange(validateNumber(e.target.value, { min: 0, max: MAX_PROFIT_PERCENTAGE }))
                    }
                  />
                  <span className="input-group-text">%</span>
                </div>
              </td>
              <td colSpan={3}></td>
            </tr>
            <InfoRow id="profit" isOpen={openInfo.has('profit')}>
              Дотук сме сметнали каква е цената на вашата услуга, която ще ви
              позволи да живеете спокойно като покривате всичките си разходи. Ако
              искате да имате възможност да развивате устойчиво дейността си, то е
              важно да заложите своя % печалба. Ако сте начинаещ фотограф, то може
              да си позволите този процент да е 0. С натрупването на опит е хубаво
              да завишавате и процентът печалба.
            </InfoRow>
          </tbody>
        </table>
      </div>
      <div className="table-responsive">
        <table className="table table-hover w-100">
          <tbody>
            <tr className="table-success">
              <th scope="col">
                <h4>Цена за 1 снимачен час със заложената печалба:</h4>
              </th>
              <td>
                <h4>{pricePerHourWithProfit.toFixed(2)} лв.</h4>
              </td>
              <td colSpan={3}></td>
            </tr>
            <tr className="table-success">
              <th scope="col">
                <h4>Цена за един снимачен ден със заложената печалбва</h4>
              </th>
              <td>
                <h4>{pricePerDayWithProfit.toFixed(2)} лв.</h4>
              </td>
              <td colSpan={3}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}




