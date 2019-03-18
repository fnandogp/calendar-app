import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

import SelectInput from '../UI/SelectInput';
import InputText from '../UI/InputText';
import Button from '../UI/Button';

const calendarForm = props => {
  const editing = !!props.appointment;

  return (
    <div className="CalendarForm">
      <div className="CalendarForm--Title">
        New appointment
      </div>

      <form
        className="CalendarForm--Form"
        onSubmit={
          (event) => props.handleFormSubmit(
            event,
            editing ? props.appointment.day : props.dayInput,
            props.descriptionInput
          )
        }
      >
        <SelectInput
          name="day"
          label="Day"
          value={props.dayInput}
          handleChange={props.handleDayInputChange}
          options={props.dayOptions}
          disabled={editing}
        />

        <InputText
          name="description"
          label="Description"
          value={props.descriptionInput}
          handleChange={props.handleDescriptionInputChange}
        />

        {props.warning &&
          <p className="CalendarForm--Warning">
            You already have an appointment this day.
          </p>}

        <Button
          type="submit"
          name="add"
          className="CalendarForm--FormAction"
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
  dayOptions: PropTypes.array.isRequired,
  appointment: PropTypes.object,
  handleDescriptionInputChange: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  warning:  PropTypes.bool
}

calendarForm.defaultProps = {
  dayOptions: [],
  warning: false
}

export default calendarForm;
