import { useCalculator } from './hooks/useCalculator';
import { useToggleInfo } from './hooks/useToggleInfo';
import { EquipmentSection } from './components/EquipmentSection';
import { YearlyExpensesSection } from './components/YearlyExpensesSection';
import { SalarySection } from './components/SalarySection';
import { TimeInvestmentSection } from './components/TimeInvestmentSection';
import { ResultsSection } from './components/ResultsSection';
import { AssignmentSection } from './components/AssignmentSection';
import { SummaryPanel } from './components/SummaryPanel';
import './App.css';

function App() {
  const {
    state,
    calculations,
    updateEquipment,
    updateYearlyExpenses,
    updateTimeInvestment,
    updateAssignment,
    setSalary,
    setProfit,
  } = useCalculator();

  const { openInfo, toggleInfo } = useToggleInfo();

  return (
    <div className="container">
      <SummaryPanel
        equipmentSum={calculations.equipmentSum}
        equipmentPerYear={calculations.equipmentPerYear}
        yearlyCosts={calculations.yearlyCosts}
        socialSecurity={calculations.socialSecurity}
        taxes={calculations.taxes}
        totalYearlyCosts={calculations.totalYearlyCosts}
        pricePerHour={calculations.pricePerHour}
        pricePerDay={calculations.pricePerDay}
        pricePerHourWithProfit={calculations.pricePerHourWithProfit}
        pricePerDayWithProfit={calculations.pricePerDayWithProfit}
        assignmentPrice={calculations.assignmentPrice}
      />
      <div className="py-3 py-md-5 text-center">
        <a href="https://photoworld.bg" className="mb-3 mb-md-5"><img src="./images/logo.png" alt="Photoworld.bg" width="150" /></a>
        <h2 className="h3 h2-md">Калкулатор за минималната себестойност на фотографския труд</h2>
        <p className="lead">
          <i>Версия 1.1</i>
        </p>
        <p className="px-2 px-md-0">
          Това е информационен инструмент, който дава разумна оценка на
          минималната себестойност на фотографския труд. Той взима предвид
          стойността на това да правите бизнес, както и възнаграждението, което
          искате да получавате. Той не може да покрие абсолютно всички ситуации
          за всички фотографи, но дава една ясна основа, върху която да стъпите
          и показва какво реално би трябвало да струва вашият труд, за да може
          да покривате всичките си разходи и да работите като фотограф.{' '}
          <br />
          <br />
          В калкулатора са зададени стойности, които сме сметнали за реалистични
          за някои от основните разходи, които всеки фотограф прави. Може свободно
          да ги променяте, за да постигнете резултат спрямо вашите инвестиции.
          <br />
          <br />
        </p>
      </div>

      <div className="row">
        <div className="col-12 order-md-1">
          <hr className="mb-5" />
          <form className="needs-validation" noValidate>
            <EquipmentSection
              equipment={state.equipment}
              equipmentSum={calculations.equipmentSum}
              equipmentPerYear={calculations.equipmentPerYear}
              onUpdate={updateEquipment}
              onToggleInfo={toggleInfo}
              openInfo={openInfo}
            />

            <YearlyExpensesSection
              yearlyExpenses={state.yearlyExpenses}
              equipmentPerYear={calculations.equipmentPerYear}
              totalCosts={calculations.yearlyCosts}
              onUpdate={updateYearlyExpenses}
              onToggleInfo={toggleInfo}
              openInfo={openInfo}
            />

            <SalarySection
              salary={state.salary}
              socialSecurity={calculations.socialSecurity}
              taxes={calculations.taxes}
              onSalaryChange={setSalary}
              onToggleInfo={toggleInfo}
              openInfo={openInfo}
            />

            <TimeInvestmentSection
              timeInvestment={state.timeInvestment}
              timeShooting={calculations.timeShooting}
              hoursShooting={calculations.hoursShooting}
              onUpdate={updateTimeInvestment}
              onToggleInfo={toggleInfo}
              openInfo={openInfo}
            />

            <ResultsSection
              totalYearlyCosts={calculations.totalYearlyCosts}
              pricePerHour={calculations.pricePerHour}
              pricePerDay={calculations.pricePerDay}
              profit={state.profit}
              pricePerHourWithProfit={calculations.pricePerHourWithProfit}
              pricePerDayWithProfit={calculations.pricePerDayWithProfit}
              onProfitChange={setProfit}
              onToggleInfo={toggleInfo}
              openInfo={openInfo}
            />

            <AssignmentSection
              assignment={state.assignment}
              photographerFee={calculations.assignmentPhotographerFee}
              assignmentPrice={calculations.assignmentPrice}
              onUpdate={updateAssignment}
              onToggleInfo={toggleInfo}
              openInfo={openInfo}
            />
          </form>
        </div>
      </div>

      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-5">
          &copy; {new Date().getFullYear()}{' '}
          <a href="https://photoworld.bg">Photoworld.bg</a>
        </p>
        <ul className="list-inline">
          <li className="list-inline-item">
            Направено от <a href="https://codeangels.solutions">CodeAngels</a> за{' '}
            <a href="https://photoworld.bg">Photoworld.bg</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;

