import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import moment from 'moment';
import Button from 'components/UI/Button';

const calendarGrid = ({
  today,
  monthName,
  monthOffset,
  appointments,
  handleAddAppointmentOpenModalClick,
  handleViewAppointmentOpenModalClick
}) => {
  const weekdayNames = moment.weekdays();

  return (
    <div className="CalendarGrid">
      <div className="CalendarGrid--Title">
        <div className="CalendarGrid--Month">{monthName}</div>

        <Button
          name="add-appointment-modal"
          className="CalendarGrid--Action"
          handleClick={handleAddAppointmentOpenModalClick}
        >
          Add Appointment
        </Button>
      </div>

      <div className="CalendarGrid--Grid">
        {weekdayNames.map(weekdayName => {
          return (
            <div key={weekdayName} className="CalendarGrid--Header">
              {weekdayName}
            </div>
          );
        })}

        {[...Array(monthOffset).keys()].map(value => {
          return <div key={value} className="CalendarGrid--Offset" />;
        })}

        {appointments.map(appointment => {
          return (
            <div
              key={appointment.day}
              className={`CalendarGrid--Day${
                appointment.day < today ? ' CalendarGrid--Day__past' : ''
              }`}
            >
              <div
                className={`CalendarGrid--DayNumber${
                  Number(appointment.day) === today
                    ? ' CalendarGrid--DayNumber__today'
                    : ''
                }`}
              >
                {appointment.day}
              </div>

              {appointment.description && (
                <button
                  type="button"
                  className="CalendarGrid--Appointment"
                  onClick={() =>
                    handleViewAppointmentOpenModalClick(appointment.day)
                  }
                >
                  {appointment.description}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

calendarGrid.propTypes = {
  today: PropTypes.number.isRequired,
  monthName: PropTypes.string.isRequired,
  monthOffset: PropTypes.number,
  appointments: PropTypes.shape.isRequired,
  handleAddAppointmentOpenModalClick: PropTypes.func.isRequired,
  handleViewAppointmentOpenModalClick: PropTypes.func.isRequired
};

calendarGrid.defaultProps = {
  monthOffset: 0
};

export default calendarGrid;
