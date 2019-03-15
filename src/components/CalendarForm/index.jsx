import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import InputText from '../UI/InputText';
import Button from '../UI/Button';

const calendarForm = (props) => {
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
          handleClick={() => props.handleAddButtonClick(
            props.dayInput, props.descriptionInput)}
        >
          Add
        </Button>
      </form>
    </div>
  );
}

calendarForm.propTypes = {
  dayInput: PropTypes.string.isRequired,
  handleDayInputChange: PropTypes.func.isRequired,
  descriptionInput: PropTypes.string.isRequired,
  handleDescriptionInputChange: PropTypes.func.isRequired,
  handleAddButtonClick: PropTypes.func.isRequired,
}

export default calendarForm;
