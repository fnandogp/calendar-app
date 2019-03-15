import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

import moment from 'moment';

const calendarGrid = props => {
  console.log("props", props)

  const weekdayNames = moment.weekdays();

  return (
    <div className="CalendarGrid">
      <div className="CalendarGrid--Month">
        {props.monthName}
      </div>

      <div className="CalendarGrid--Grid">
        {weekdayNames.map((weekdayName) => {
          return (
            <div
              key={weekdayName}
              className="CalendarGrid--Header"
            >
              {weekdayName}
            </div>);
        })}

        {Array(props.monthOffset).fill().map((value, index) => {
          return (
            <div
              key={index}
              className="CalendarGrid--Offset"
            />
          );
        })}

        {props.appointments.map(appointment => {
          return (
            <div
              key={appointment.day}
              className="CalendarGrid--Day"
            >
              <div className="CalendarGrid--DayNumber">
                {appointment.day}
              </div>

              {appointment.description &&
                <div className="CalendarGrid--Appointment">
                  {appointment.description}
                </div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

calendarGrid.propTyps = {
  monthName: PropTypes.string.isRequired,
  monthOffset: PropTypes.number,
  appointment: PropTypes.array.isRequired,
}

calendarGrid.defaultProps = {
  monthOffset: 0,
}

export default calendarGrid;
