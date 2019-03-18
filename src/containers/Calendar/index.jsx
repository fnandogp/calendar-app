import React, { useState, useEffect } from 'react';
import './style.css';
import CalendarGrid from '../../components/CalendarGrid';
import CalendarAppointmentView from '../../components/CalendarAppointmentView';
import CalendarForm from '../../components/CalendarForm';
import Modal from '../../components/UI/Modal';

import moment from 'moment';

const calendar = props => {
  // States
  const [appointments, setAppoitments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const [dayInput, setDayInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [dayOptions, setDayOptions] = useState([]);
  const [warning, setWarning] = useState(false);

  const [today, setToday] = useState(0);
  const [monthName, setMonthName] = useState('');
  const [monthOffset, setMonthOffset] = useState(0);

  const [formModalOpened, setFormModalOpened] = useState(false);
  const [viewModalOpened, setViewModalOpened] = useState(false);

  // Initialize the appoitnments array
  useEffect(() => {
    const today = moment().date();
    const numDay = moment().endOf('month').date();
    const monthDays = [...Array(numDay).keys()].map(i => i + 1);

    setToday(today);
    setMonthName(moment().format('MMMM, YYYY'));
    setMonthOffset(moment().startOf('month').weekday());

    const initialAppointments = monthDays.map((day) => {
      return {
        day: day.toString(),
        description:'',
      }
    });
    setAppoitments(initialAppointments);

    const initialDayOptions = monthDays.map((day) => {
      return {
        value: day.toString(),
        disabled: day < today
      }
    });
    setDayOptions([{
      value: '',
      disabled: false,
    }].concat(initialDayOptions)
    );
  }, []);

  useEffect(() => {
    setFormModalOpened(props.isShown);
  }, [props.isShown]);

  // Handlers
  const handleDescriptionInputChange = (event) => {
    setDescriptionInput(event.target.value);
  }

  const handleDayInputChange = (event) => {
    setDayInput(event.target.value);
  }

  const handleFormSubmit = (event, day, description) => {
    event.preventDefault();

    if(!selectedAppointment
      && appointments[dayInput - 1].description !== '') {
      setWarning(true);

      return false;
    }

    const newAppointments = appointments.map(appointment => {
      if(appointment.day === day){
        return {
          ...appointment,
          description: description
        }
      }

      return { ...appointment };
    });

    setDayInput('');
    setDescriptionInput('');
    setWarning(false);
    setAppoitments(newAppointments);
    setFormModalOpened(false);
    setSelectedAppointment(null);
  };

  const handleViewAppointmentOpenModalClick = (day) => {
    const currentAppointment = appointments.find(appointment => {
      return appointment.day === day;
    })

    setSelectedAppointment(currentAppointment);
    setViewModalOpened(true);
  }

  const handleCloseFormModalClick = () => {
    setDayInput('');
    setDescriptionInput('');
    setWarning(false);
    setFormModalOpened(false);
  }

  const handleCloseViewAppointmentClick = (day) => {
    setViewModalOpened(false);
    setSelectedAppointment(null);
  }

  const handleAddAppointmentOpenModalClick = () => {
    setViewModalOpened(false);
    setFormModalOpened(true);
  }

  const handleEditAppointmentOpenModalClick = (day) => {
    const selectedAppointment = appointments.find(appointment => {
      return appointment.day === day;
    })

    setSelectedAppointment(selectedAppointment);
    setDayInput(selectedAppointment.day);
    setDescriptionInput(selectedAppointment.description)
    setViewModalOpened(false);
    setFormModalOpened(true);
  }

  const handleDeleteAppointmentClick = (day) => {
    const newAppointments = appointments.map(appointment => {
      if(appointment.day === day){
        return {
          ...appointment,
          description: ""
        }
      }

      return { ...appointment };
    });

    setAppoitments(newAppointments);
    setViewModalOpened(false);
    setSelectedAppointment(null);
  }

  return (
    <div className="Calendar">
      <CalendarGrid
        today={today}
        monthName={monthName}
        monthOffset={monthOffset}
        appointments={appointments}
        handleAddAppointmentOpenModalClick={handleAddAppointmentOpenModalClick}
        handleViewAppointmentOpenModalClick={handleViewAppointmentOpenModalClick}
        handleEditAppointmentOpenModalClick={handleEditAppointmentOpenModalClick}
      />

      <Modal
        isShown={viewModalOpened}
        handleCloseModalClick={handleCloseViewAppointmentClick}
      >
        <CalendarAppointmentView
          appointment={selectedAppointment}
          handleEditAppointmentOpenModalClick={handleEditAppointmentOpenModalClick}
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
}

export default calendar;
