import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

import Button from '../UI/Button';
import moment from 'moment';

const calendarGrid = props => {
  const weekdayNames = moment.weekdays();

  return (
    <div className="CalendarGrid">
      <div className="CalendarGrid--Title">
        <div className="CalendarGrid--Month">
          {props.monthName}
        </div>

        <Button
          name="add-appointment-modal"
          className="CalendarGrid--Action"
          handleClick={props.handleAddAppointmentOpenModalClick}
        >
          Add Appointment
        </Button>
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
              className={
                "CalendarGrid--Day" +
                  (appointment.day < props.today
                    ? " CalendarGrid--Day__past"
                    : "")

              }
            >
              <div className={
                "CalendarGrid--DayNumber" +
                  (Number(appointment.day) === props.today
                    ? " CalendarGrid--DayNumber__today"
                    : "")
                }
              >
                {appointment.day}
              </div>

              {appointment.description &&
                <a
                  className="CalendarGrid--Appointment"
                  href="#"
                  onClick={() => props.handleViewAppointmentOpenModalClick(appointment.day)}
                >
                {appointment.description}
              </a>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

calendarGrid.propTyps = {
  today: PropTypes.number.isRequired,
  monthName: PropTypes.string.isRequired,
  monthOffset: PropTypes.number,
  appointment: PropTypes.array.isRequired,
  handleAddAppointmentOpenModalClick: PropTypes.func.isRequired,
  handleViewAppointmentOpenModalClick: PropTypes.func.isRequired
}

calendarGrid.defaultProps = {
  monthOffset: 0,
}

export default calendarGrid;
