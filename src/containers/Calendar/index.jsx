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
  const [descriptionInput, setDescriptionInput] = useState('');
  const [dayInput, setDayInput] = useState('');
  const [monthName, setMonthName] = useState('');
  const [monthOffset, setMonthOffset] = useState(0);

  const [formModalOpened, setFormModalOpened] = useState(false);
  const [viewModalOpened, setViewModalOpened] = useState(false);

  // Initialize the appoitnments array
  useEffect(() => {
    setMonthName(moment().format('MMMM, YYYY'));
    setMonthOffset(moment().startOf('month').weekday());

    const numDay = moment().endOf('month').date();
    const initialAppointments = [];

    for (let i = 0; i < numDay; i++) {
      initialAppointments.push({
        day: (i + 1).toString(),
        description:'',
      });
    }

    setAppoitments(initialAppointments);
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

  const handleButtonClick = (day, description) => {
    console.log(day, description);

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

  return (
    <div className="Calendar">
      <CalendarGrid
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
        />
      </Modal>

      <Modal
        isShown={formModalOpened}
        handleCloseModalClick={handleCloseFormModalClick}
      >
        <CalendarForm
          descriptionInput={descriptionInput}
          handleDescriptionInputChange={handleDescriptionInputChange}
          dayInput={dayInput}
          appointment={selectedAppointment}
          handleDayInputChange={handleDayInputChange}
          handleButtonClick={handleButtonClick}
        />
      </Modal>
    </div>
  );
}

export default calendar;
