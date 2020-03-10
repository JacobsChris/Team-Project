import React from 'react';
import DatePicker from 'react-datepicker';

export default class DateSelector extends React.Component {
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