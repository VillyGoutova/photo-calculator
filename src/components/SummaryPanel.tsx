import { useState } from 'react';

interface SummaryPanelProps {
  equipmentSum: number;
  equipmentPerYear: number;
  yearlyCosts: number;
  socialSecurity: number;
  taxes: number;
  totalYearlyCosts: number;
  pricePerHour: number;
  pricePerDay: number;
  pricePerHourWithProfit: number;
  pricePerDayWithProfit: number;
  assignmentPrice: number;
}

export function SummaryPanel({
  equipmentSum,
  equipmentPerYear,
  yearlyCosts,
  socialSecurity,
  taxes,
  totalYearlyCosts,
  pricePerHour,
  pricePerDay,
  pricePerHourWithProfit,
  pricePerDayWithProfit,
  assignmentPrice,
}: SummaryPanelProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {/* Toggle Button - Always visible */}
      <button
        type="button"
        className={`summary-toggle-btn ${isVisible ? 'active' : ''}`}
        onClick={() => setIsVisible(!isVisible)}
        aria-label={isVisible ? 'Скрий резултати' : 'Покажи резултати'}
        title="Ключови резултати"
      >
        <i className={`fas fa-${isVisible ? 'times' : 'chart-line'}`}></i>
        {!isVisible && <span className="summary-badge">!</span>}
      </button>

      {/* Slide Panel */}
      <div className={`summary-panel ${isVisible ? 'visible' : ''}`}>
        <div className="summary-panel-header">
          <h5 className="summary-panel-title">Ключови резултати</h5>
          <button
            type="button"
            className="btn btn-sm btn-link summary-close"
            onClick={() => setIsVisible(false)}
            aria-label="Затвори"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="summary-panel-body">
          <button
            type="button"
            className="btn btn-sm btn-link summary-expand-toggle"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isExpanded ? 'Скрий детайли' : 'Покажи детайли'}
          >
            <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
            <span className="ml-2">{isExpanded ? 'Скрий детайли' : 'Покажи детайли'}</span>
          </button>

          <div className={`summary-panel-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
            <div className="summary-section">
              <h5 className="summary-title">Техника</h5>
              <div className="summary-item">
                <span>Обща стойност:</span>
                <strong>{equipmentSum.toFixed(2)} лв.</strong>
              </div>
              <div className="summary-item">
                <span>Разход за 1 година:</span>
                <strong>{equipmentPerYear.toFixed(2)} лв.</strong>
              </div>
            </div>

            <div className="summary-section">
              <h5 className="summary-title">Годишни разходи</h5>
              <div className="summary-item">
                <span>Общо разходи:</span>
                <strong>{yearlyCosts.toFixed(2)} лв.</strong>
              </div>
              <div className="summary-item">
                <span>Осигуровки:</span>
                <strong>{socialSecurity.toFixed(2)} лв.</strong>
              </div>
              <div className="summary-item">
                <span>Данъци:</span>
                <strong>{taxes.toFixed(2)} лв.</strong>
              </div>
              <div className="summary-item highlight">
                <span>Общи годишни разходи:</span>
                <strong>{totalYearlyCosts.toFixed(2)} лв.</strong>
              </div>
            </div>

            <div className="summary-section">
              <h5 className="summary-title">Цени</h5>
              <div className="summary-item">
                <span>Цена за 1 час:</span>
                <strong>{pricePerHour.toFixed(2)} лв.</strong>
              </div>
              <div className="summary-item">
                <span>Цена за 1 ден:</span>
                <strong>{pricePerDay.toFixed(2)} лв.</strong>
              </div>
              <div className="summary-item">
                <span>Цена за 1 час (с печалба):</span>
                <strong>{pricePerHourWithProfit.toFixed(2)} лв.</strong>
              </div>
              <div className="summary-item">
                <span>Цена за 1 ден (с печалба):</span>
                <strong>{pricePerDayWithProfit.toFixed(2)} лв.</strong>
              </div>
              {assignmentPrice > 0 && (
                <div className="summary-item highlight">
                  <span>Цена за ангажимент:</span>
                  <strong>{assignmentPrice.toFixed(2)} лв.</strong>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
