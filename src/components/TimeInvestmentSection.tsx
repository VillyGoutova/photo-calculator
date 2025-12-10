import { TimeInvestment } from '../types';
import { InfoButton, InfoRow } from './InfoButton';
import { validatePercentage } from '../utils/validation';
import { MAX_PERCENTAGE } from '../constants/validationConstants';

interface TimeInvestmentSectionProps {
  timeInvestment: TimeInvestment;
  timeShooting: number;
  hoursShooting: number;
  onUpdate: (updates: Partial<TimeInvestment>) => void;
  onToggleInfo: (id: string) => void;
  openInfo: Set<string>;
}

export function TimeInvestmentSection({
  timeInvestment,
  timeShooting,
  hoursShooting,
  onUpdate,
  onToggleInfo,
  openInfo,
}: TimeInvestmentSectionProps) {
  return (
    <>
      <h3 className="mb-5 mt-5 alert alert-dark">Инвестиция време</h3>
      <p>
        Освен техника, софтуери, оборудване и всички неща, които сметнахме дотук,
        много важен е въпросът колко време сте склонни да вложите във
        фотографската работа. Макар и да е професия без регламентирано работно
        време, фотографията е професия като всяка друга. Истината е, че самото
        снимане е малка част от работата. За да практикувате професията фотограф
        има и много други дейности, които трябва да извършвате. Помислете как
        разпределяте времето си като погледнете полетата по-долу.
      </p>
      <div className="table-responsive mt-5">
        <table className="table table-hover w-100">
          <tbody>
            <tr>
              <th scope="col">
                <label htmlFor="timebusiness">
                  % от време за бизнес и маркетинг
                </label>
                <InfoButton
                  id="timebusiness"
                  onToggle={onToggleInfo}
                  isOpen={openInfo.has('timebusiness')}
                />
              </th>
              <td>
                <div className="input-group">
                  <input
                    type="number"
                    min="0"
                    max={MAX_PERCENTAGE}
                    className="form-control middle-width"
                    id="timebusiness"
                    value={timeInvestment.timeBusiness || ''}
                    onChange={(e) =>
                      onUpdate({
                        timeBusiness: validatePercentage(e.target.value),
                      })
                    }
                  />
                  <span className="input-group-text">%</span>
                </div>
              </td>
              <td colSpan={3}></td>
            </tr>
            <InfoRow id="timebusiness" isOpen={openInfo.has('timebusiness')}>
              Това е времето, което отделяте за публикации в социалните мрежи,
              писане на блогове, поддръжка и актуализация на сайта си, посещение
              на обучения и семинари, плащане на сметки, събиране на документи за
              счетоводителя ви, договори, фактури и други активности, свързани с
              обслужването на бизнеса ви. Да кажем, че 20% от времето ви отива в
              подобни дейности, е добро начало.
              <br />
              <b>
                Предупреждаваме, че не е добра идея да оставяте 0% в това поле.
              </b>{' '}
              Няма как да съществувате, ако не отделяте време за тези неща. Ако
              сложите 0% в това поле, то тогава предвидете разход, за да плащате
              на някой да върши тази работа вместо вас и го добавете в "други" при
              годишните разходи.
            </InfoRow>
            <tr>
              <th scope="col">
                <label htmlFor="timeclients">% от време за общуване с клиенти</label>
                <InfoButton
                  id="timeclients"
                  onToggle={onToggleInfo}
                  isOpen={openInfo.has('timeclients')}
                />
              </th>
              <td>
                <div className="input-group">
                  <input
                    type="number"
                    min="0"
                    max={MAX_PERCENTAGE}
                    className="form-control middle-width"
                    id="timeclients"
                    value={timeInvestment.timeClients || ''}
                    onChange={(e) =>
                      onUpdate({
                        timeClients: validatePercentage(e.target.value),
                      })
                    }
                  />
                  <span className="input-group-text">%</span>
                </div>
              </td>
              <td colSpan={3}></td>
            </tr>
            <InfoRow id="timeclients" isOpen={openInfo.has('timeclients')}>
              Тук са срещите с клиенти. Времето за писане на имейли и изготвяне на
              оферти. Планиране на фотосесии и други от този характер.
              <br />
              Както и в предишното поле, ако сложите 0% в това поле, преценете и
              добавете разход за тази дейност в "други" в годишните разходи.
            </InfoRow>
            <tr>
              <th scope="col">
                <label htmlFor="timeretouch">
                  % от време за обработка на снимки
                </label>
                <InfoButton
                  id="timeretouch"
                  onToggle={onToggleInfo}
                  isOpen={openInfo.has('timeretouch')}
                />
              </th>
              <td>
                <div className="input-group">
                  <input
                    type="number"
                    min="0"
                    max={MAX_PERCENTAGE}
                    className="form-control middle-width"
                    id="timeretouch"
                    value={timeInvestment.timeRetouch || ''}
                    onChange={(e) =>
                      onUpdate({
                        timeRetouch: validatePercentage(e.target.value),
                      })
                    }
                  />
                  <span className="input-group-text">%</span>
                </div>
              </td>
              <td colSpan={3}></td>
            </tr>
            <InfoRow id="timeretouch" isOpen={openInfo.has('timeretouch')}>
              Това е времето, което ви е нужно за преглед на снимките, сортиране,
              бекъп, обработка, ретуш и предаване на снимките. Тук времето може да
              варира според естествотото на фотографската ви работа. 40% е число,
              което смятаме, че е разумно в повечето случаи.
              <br />
              Отново, ако сложите 0% тук, добавете разход за тази дейност в
              "други" в годишните си разходи.
            </InfoRow>
            <tr className="table-primary">
              <th scope="col">
                <label htmlFor="timeshooting">% от време за снимане</label>
                <InfoButton
                  id="timeshooting"
                  onToggle={onToggleInfo}
                  isOpen={openInfo.has('timeshooting')}
                />
              </th>
              <td>
                {timeShooting}% (<strong>{hoursShooting.toFixed(0)} часа за година</strong>)
              </td>
              <td colSpan={3}></td>
            </tr>
            <InfoRow id="timeshooting" isOpen={openInfo.has('timeshooting')}>
              Това е времето, което остава и отделяте за самото снимане. Това е и
              времето, което реално таксувате на клиентите - един снимачен час.
              Важно е да се разбере, че в неговата цена се включва и всичкото
              останало време, което влагате в процентите, които заложихме по-горе.
              Ако 20% от времето ви отива в снимки, това са около 8 часа снимки
              средно на седмица.
            </InfoRow>
          </tbody>
        </table>
      </div>
    </>
  );
}




