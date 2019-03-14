import React from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/Button';

const calendarForm = (props) => {
  return (
    <div className="CalendarForm">
      <form>
        <input
          type="text"
          name="day"
          value={props.dayInput}
          onChange={props.handleDayInputChange}
        />

        <input
          type="text"
          name="description"
          value={props.descriptionInput}
          onChange={props.handleDescriptionInputChange}
        />

        <Button
          name="add"
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
