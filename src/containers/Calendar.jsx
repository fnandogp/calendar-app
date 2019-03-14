import React, { useState, useEffect } from 'react';
import CalendarGrid from '../components/CalendarGrid';
import CalendarForm from '../components/CalendarForm';

import moment from 'moment';

const calendar = props => {
  // States
  const [appointments, setAppoitments] = useState([]);
  const [descriptionInput, setDescriptionInput] = useState('');
  const [dayInput, setDayInput] = useState('');

  // Initialize the appoitnments array
  useEffect(() => {
    const numDay = moment().endOf('month').date();
    const initialAppointments = [];

    for (let i = 0; i < numDay; i++) {
      initialAppointments.push({
        day: i + 1,
        description:'',
      });
    }

    setAppoitments(initialAppointments);
  }, []);

  // Handlers
  const handleDescriptionInputChange = (event) => {
    setDescriptionInput(event.target.value);
  }

  const handleDayInputChange = (event) => {
    setDayInput(event.target.value);
  }

  const handleAddButtonClick = (day, description) => {
    const newAppointments = appointments.map(appointment => {
      if(appointment.day === +day){
        return {
          ...appointment,
          description: description
        }
      }

      return { ...appointment };
    });
    
    setAppoitments(newAppointments);
  };

  return (
    <div className="Calendar">
      <CalendarGrid
        appointments={appointments}
      />

      <CalendarForm
        descriptionInput={descriptionInput}
        handleDescriptionInputChange={handleDescriptionInputChange}
        dayInput={dayInput}
        handleDayInputChange={handleDayInputChange}
        handleAddButtonClick={handleAddButtonClick}
      />
    </div>
  );
}

export default calendar;
