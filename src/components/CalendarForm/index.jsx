import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import InputText from '../UI/InputText';
import Button from '../UI/Button';

const calendarForm = (props) => {
  const editing = !!props.appointment;

  return (
    <div className="CalendarForm">
      <div className="CalendarForm--Title">
        New appointment
      </div>

      <form className="CalendarForm--Form">
        <InputText
          name="day"
          label="Day"
          value={props.dayInput}
          handleChange={props.handleDayInputChange}
          disabled={editing}
        />

        <InputText
          name="description"
          label="Description"
          value={props.descriptionInput}
          handleChange={props.handleDescriptionInputChange}
        />

        <Button
          name="add"
          className="CalendarForm--FormAction"
          handleClick={
            () => props.handleButtonClick(
              editing ? props.appointment.day : props.dayInput,
              props.descriptionInput
            )
          }
        >
          {props.appointment ? 'Edit' : 'Add'}
        </Button>
      </form>
    </div>
  );
}

calendarForm.propTypes = {
  dayInput: PropTypes.string.isRequired,
  handleDayInputChange: PropTypes.func.isRequired,
  descriptionInput: PropTypes.string.isRequired,
  appointment: PropTypes.object,
  handleDescriptionInputChange: PropTypes.func.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
}

export default calendarForm;
