import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

export default class DateSelector extends React.Component {
// () => {
    // const [startDate, setStartDate] = useState(new Date());
    render(){
    return (
      <DatePicker
        placeholderText="Click to select a date"
        onChange={this.props.handleChange}
        name={this.props.name || ''}
        selected={this.props.value || ''} 
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
    );
    }
  }