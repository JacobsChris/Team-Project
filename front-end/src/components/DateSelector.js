import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

export function DateSelector() {
// () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker
      placeholderText="Click to select a date"
        // selected={startDate}
        onChange={date => setStartDate(date)}
        // placeholderText="Click to select a date"
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
    );
  };
// }

export default DateSelector;