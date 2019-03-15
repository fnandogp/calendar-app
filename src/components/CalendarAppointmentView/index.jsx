import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

import Button from '../UI/Button';

const calendarAppointmentView = props => {
  return (
    <div className="CalendarAppointmentView">

      <p className="CalendarAppointmentView--Day">
        <strong>Day:</strong> {props.appointment ? props.appointment.day : ''}
      </p>

      <p className="CalendarAppointmentView--Description">
        <strong>Description:</strong> {props.appointment ? props.appointment.description : ''}
      </p>

      <Button
        name="edit-appointment"
        className="CalendarAppointmentView--Action"
        handleClick={() => props.handleEditAppointmentOpenModalClick(props.appointment.day)}
      >
        Edit
      </Button>
    </div>
  );
}

calendarAppointmentView.propTypes = {
  appointment: PropTypes.object,
  handleEditAppointmentOpenModalClick: PropTypes.func.isRequired,
}

export default calendarAppointmentView;
