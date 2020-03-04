import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

export default class DateSelector extends React.Component {
// () => {
    // const [startDate, setStartDate] = useState(new Date());
    render(){
    return (
      <DatePicker
      placeholderText="Click to select a date"
        // selected={startDate}
        onChange={this.props.handleChange}
        value={this.props.value || ''}
        name={this.props.name || ''} 
        // placeholderText="Click to select a date"
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
    );
    }
  }