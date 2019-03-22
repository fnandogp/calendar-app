import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

import SelectInput from 'components/UI/SelectInput';
import InputText from 'components/UI/InputText';
import Button from 'components/UI/Button';

const calendarForm = ({
  dayInput,
  handleDayInputChange,
  dayOptions,
  descriptionInput,
  handleDescriptionInputChange,
  appointment,
  handleFormSubmit,
  warning
}) => {
  const editing = !!appointment;

  return (
    <div className="CalendarForm">
      <div className="CalendarForm--Title">New appointment</div>

      <form
        className="CalendarForm--Form"
        onSubmit={event =>
          handleFormSubmit(
            event,
            editing ? appointment.day : dayInput,
            descriptionInput
          )
        }
      >
        <SelectInput
          name="day"
          label="Day"
          value={dayInput}
          handleChange={handleDayInputChange}
          options={dayOptions}
          disabled={editing}
        />

        <InputText
          name="description"
          label="Description"
          value={descriptionInput}
          handleChange={handleDescriptionInputChange}
        />

        {warning && <p className="CalendarForm--Warning">{warning}</p>}

        <Button type="submit" name="add" className="CalendarForm--FormAction">
          {appointment ? 'Edit' : 'Add'}
        </Button>
      </form>
    </div>
  );
};

calendarForm.propTypes = {
  dayInput: PropTypes.string.isRequired,
  handleDayInputChange: PropTypes.func.isRequired,
  descriptionInput: PropTypes.string.isRequired,
  dayOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  appointment: PropTypes.shape({
    day: PropTypes.string,
    description: PropTypes.string
  }),
  handleDescriptionInputChange: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  warning: PropTypes.bool
};

calendarForm.defaultProps = {
  appointment: null,
  warning: false
};

export default calendarForm;
