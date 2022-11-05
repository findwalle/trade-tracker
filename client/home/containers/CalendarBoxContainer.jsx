import React from 'react';

function CalendarBoxContainer(props) {
  const { date } = props;

  return (
    <div className = 'calenderBoxContainer'>
      {date}
    </div>
  )
}

export default CalendarBoxContainer;