import React from 'react';
import dayjs from 'dayjs';

const Header = ({ selectedDate, setSelectedDate, toggleViewType, viewType }) => {
  const gotoPrevMonth = () => {
    setSelectedDate(selectedDate.subtract(1, 'month'));
  }
  const gotoNextMonth = () => {
    setSelectedDate(selectedDate.add(1, 'month'));
  }
  const showToday = () => {
    setSelectedDate(dayjs());
  }
  const showMonthView = (e) => {
    toggleViewType(e, 'MONTH');
  }

  return (
    <div className="header">
      <div className="leftHeader">
        {
          viewType == "MONTH" ? <button onClick={gotoPrevMonth}>&lt;</button> : null
        }
        <div role="button" onClick={showMonthView} className="cursor-pointer">
          {selectedDate.format('MMM')} {selectedDate.format('YYYY')}
        </div>
        {
          viewType == "MONTH" ? <button onClick={gotoNextMonth}>&gt;</button> : null
        }
      </div>
      <div className="rightHeader">
        <button onClick={showToday}>
          Today
        </button>
      </div>
    </div>
  )
}

export default Header;