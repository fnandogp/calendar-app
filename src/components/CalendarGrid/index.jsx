import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const calendarGrid = props => {
  return (
    <div className="CalendarGrid">
      <ul>
        {props.appointments.map(appointment => {
          return (
            <li key={appointment.day}>
              <small>{appointment.day}</small>
              {appointment.description}
            </li>);
        })}
      </ul>
    </div>
  );
}

calendarGrid.propTyps = {
  appointment: PropTypes.array.isRequired
}

export default calendarGrid;
