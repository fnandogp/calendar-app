import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

import Button from 'components/UI/Button';

const calendarAppointmentView = ({
  appointmentDay,
  appointmentDescription,
  handleEditAppointmentOpenModalClick,
  handleDeleteAppointmentClick
}) => (
  <div className="CalendarAppointmentView">
    <p className="CalendarAppointmentView--Day">
      <strong>Day:</strong> {appointmentDay}
    </p>

    <p className="CalendarAppointmentView--Description">
      <strong>Description:</strong> {appointmentDescription}
    </p>

    <div className="CalendarAppointmentView--Actions">
      <Button
        name="edit-appointment"
        className="CalendarAppointmentView--EditAction"
        handleClick={() => handleEditAppointmentOpenModalClick(appointmentDay)}
      >
        Edit
      </Button>{' '}
      <Button
        name="delete-appointment"
        className="CalendarAppointmentView--DeleteAction"
        handleClick={() => handleDeleteAppointmentClick(appointmentDay)}
      >
        Delete!
      </Button>
    </div>
  </div>
);

calendarAppointmentView.propTypes = {
  appointmentDay: PropTypes.string.isRequired,
  appointmentDescription: PropTypes.string.isRequired,
  handleEditAppointmentOpenModalClick: PropTypes.func.isRequired,
  handleDeleteAppointmentClick: PropTypes.func.isRequired
};

export default calendarAppointmentView;
