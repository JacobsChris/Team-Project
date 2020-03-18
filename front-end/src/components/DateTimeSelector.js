import React from 'react';
import DatePicker from 'react-datepicker';

export default class DateTimeSelector extends React.Component {
    render(){
    return (
      <DatePicker
        dateFormat={this.props.dateFormat}
        placeholderText="DD/MM/YYYY"
        onChange={this.props.handleChange}
        name={this.props.name || ''}
        selected={this.props.value || ''} 
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        value={this.props.value}
        showTimeSelect 
        timeFormat="HH:mm" 
        timeIntervals={5} 
        timeCaption="time" 
      />
    );
    }
  }