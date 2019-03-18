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

      <div className="CalendarAppointmentView--Actions">
        <Button
          name="edit-appointment"
          className="CalendarAppointmentView--EditAction"
          handleClick={() => props.handleEditAppointmentOpenModalClick(props.appointment.day)}
        >
          Edit
        </Button>

        {' '}

        <Button
          name="delete-appointment"
          className="CalendarAppointmentView--DeleteAction"
          handleClick={() => props.handleDeleteAppointmentClick(props.appointment.day)}
        >
          Delete!
        </Button>
      </div>
    </div>
  );
}

calendarAppointmentView.propTypes = {
  appointment: PropTypes.object,
  handleEditAppointmentOpenModalClick: PropTypes.func.isRequired,
  handleDeleteAppointmentClick: PropTypes.func.isRequired,
}

export default calendarAppointmentView;
