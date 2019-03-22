import React, { useState, useEffect } from 'react';
import './style.css';
import moment from 'moment';
import PropTypes from 'prop-types';
import CalendarGrid from 'components/CalendarGrid';
import CalendarAppointmentView from 'components/CalendarAppointmentView';
import CalendarForm from 'components/CalendarForm';
import Modal from 'components/UI/Modal';

const calendar = ({ isShown }) => {
  // States
  const [appointments, setAppoitments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const [dayInput, setDayInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [dayOptions, setDayOptions] = useState([]);
  const [warning, setWarning] = useState('');

  const [today, setToday] = useState(0);
  const [monthName, setMonthName] = useState('');
  const [monthOffset, setMonthOffset] = useState(0);

  const [formModalOpened, setFormModalOpened] = useState(false);
  const [viewModalOpened, setViewModalOpened] = useState(false);

  // Initialize the appoitnments array
  useEffect(() => {
    const todayDate = moment().date();
    const numDay = moment()
      .endOf('month')
      .date();
    const monthDays = [...Array(numDay).keys()].map(i => i + 1);

    setToday(todayDate);
    setMonthName(moment().format('MMMM, YYYY'));
    setMonthOffset(
      moment()
        .startOf('month')
        .weekday()
    );

    const initialAppointments = monthDays.map(day => ({
      day: day.toString(),
      description: ''
    }));
    setAppoitments(initialAppointments);

    const initialDayOptions = monthDays.map(day => ({
      value: day.toString(),
      disabled: day < todayDate
    }));
    setDayOptions(
      [
        {
          value: '',
          disabled: false
        }
      ].concat(initialDayOptions)
    );
  }, []);

  useEffect(() => {
    setFormModalOpened(isShown);
  }, [isShown]);

  // Handlers
  const handleDescriptionInputChange = event => {
    setDescriptionInput(event.target.value);
  };

  const handleDayInputChange = event => {
    setDayInput(event.target.value);
  };

  const handleFormSubmit = (event, day, description) => {
    event.preventDefault();

    if (dayInput === '') {
      setWarning('The day input is required.');

      return false;
    }

    if (descriptionInput === '') {
      setWarning('The description input is required.');

      return false;
    }

    if (!selectedAppointment && appointments[dayInput - 1].description !== '') {
      setWarning('You already have an appointment this day.');

      return false;
    }

    const newAppointments = appointments.map(appointment => {
      if (appointment.day === day) {
        return {
          ...appointment,
          description
        };
      }

      return { ...appointment };
    });

    setDayInput('');
    setDescriptionInput('');
    setWarning('');
    setAppoitments(newAppointments);
    setFormModalOpened(false);
    setSelectedAppointment(null);

    return true;
  };

  const handleViewAppointmentOpenModalClick = day => {
    const currentAppointment = appointments.find(
      appointment => appointment.day === day
    );

    setSelectedAppointment(currentAppointment);
    setViewModalOpened(true);
  };

  const handleCloseFormModalClick = () => {
    setDayInput('');
    setDescriptionInput('');
    setWarning('');
    setFormModalOpened(false);
  };

  const handleCloseViewAppointmentClick = () => {
    setViewModalOpened(false);
    setSelectedAppointment(null);
  };

  const handleAddAppointmentOpenModalClick = () => {
    setViewModalOpened(false);
    setFormModalOpened(true);
  };

  const handleEditAppointmentOpenModalClick = day => {
    const newSelectedAppointment = appointments.find(
      appointment => appointment.day === day
    );

    setSelectedAppointment(newSelectedAppointment);
    setDayInput(newSelectedAppointment.day);
    setDescriptionInput(newSelectedAppointment.description);
    setViewModalOpened(false);
    setFormModalOpened(true);
  };

  const handleDeleteAppointmentClick = day => {
    const newAppointments = appointments.map(appointment => {
      if (appointment.day === day) {
        return {
          ...appointment,
          description: ''
        };
      }

      return { ...appointment };
    });

    setAppoitments(newAppointments);
    setViewModalOpened(false);
    setSelectedAppointment(null);
  };

  return (
    <div className="Calendar">
      <CalendarGrid
        today={today}
        monthName={monthName}
        monthOffset={monthOffset}
        appointments={appointments}
        handleAddAppointmentOpenModalClick={handleAddAppointmentOpenModalClick}
        handleViewAppointmentOpenModalClick={
          handleViewAppointmentOpenModalClick
        }
        handleEditAppointmentOpenModalClick={
          handleEditAppointmentOpenModalClick
        }
      />

      <Modal
        isShown={viewModalOpened}
        handleCloseModalClick={handleCloseViewAppointmentClick}
      >
        <CalendarAppointmentView
          appointmentDay={selectedAppointment ? selectedAppointment.day : ''}
          appointmentDescription={
            selectedAppointment ? selectedAppointment.description : ''
          }
          handleEditAppointmentOpenModalClick={
            handleEditAppointmentOpenModalClick
          }
          handleDeleteAppointmentClick={handleDeleteAppointmentClick}
        />
      </Modal>

      <Modal
        isShown={formModalOpened}
        handleCloseModalClick={handleCloseFormModalClick}
      >
        <CalendarForm
          dayInput={dayInput}
          handleDayInputChange={handleDayInputChange}
          dayOptions={dayOptions}
          descriptionInput={descriptionInput}
          handleDescriptionInputChange={handleDescriptionInputChange}
          appointment={selectedAppointment}
          handleFormSubmit={handleFormSubmit}
          warning={warning}
        />
      </Modal>
    </div>
  );
};

calendar.propTypes = {
  isShown: PropTypes.bool
};

calendar.defaultProps = {
  isShown: false
};

export default calendar;
