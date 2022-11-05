import React from 'react';
import CalendarBoxContainer from './CalendarBoxContainer';

function CalendarContainer() {
  // Logic for CalendarContainer, homepage will show current month
  // We want to find the layout of days in the current month and
  // pass down as props to each CalendarBox
  
  // test
  const days = [];
  for (let i = 1; i < 36; i++) {
    days.push(<CalendarBoxContainer date = {i} key = {`date${i}`}/>)
  }

  return (
    <>
      <div className='calenderContainer'>
        {days}
      </div>
    </>
  )
}

export default CalendarContainer;