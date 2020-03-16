import React, { Component } from 'react';
import FormInput from './FormInput.js';
import DatePicker from './DateSelector.js';
import "react-datepicker/dist/react-datepicker.css";
import { Form, Button } from 'react-bootstrap';
import '../styles/searchVehicle.css';
import { connect } from 'react-redux';
import { getVehicle } from '../redux/actions/vehicleAction';
import PropTypes from 'prop-types';

class SearchVehicle extends Component {
    constructor(props){
        super(props);
        this.state = ({
            reg: '',
            make: '',
            model: '',
            colour: '',
            regDate: ''
        });
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }

    handleDateChange = (date) => {
        this.setState({
            regDate: date
        })
    }

    submit = (event) => {
        event.preventDefault();

          this.setState({
            [event.target.name]: event.target.value
          });
        
    
        let date = this.state.regDate;
    
        if(this.state.regDate){
          date = `${date.getFullYear()}-${(date.getMonth()+1) < 10?  0+ ((date.getMonth()+1).toString()) : date.getMonth()+1}-${date.getDate()}`;
        }
    
        const data = {
          vehicleRegistrationNo: this.state.reg,
        //   make: this.state.make,
        //   model: this.state.model,
        //   colour: this.state.colour,
        //   registrationDate: date,
        }
    
        this.props.getVehicle(data);
    
        if (window.location.pathname !== '/user/home/vehicleresults'){
          this.props.history.push('/user/home/vehicleresults');
        }
      }

    render() {
        return (
            <div className='form-size'>
                <Form onSubmit={this.submit}>
                <h2 className='form-header'>Search Vehicle</h2>
                <br />
                <h5 className='form-header'>Please fill out one or more fields</h5>
                <br />
                <Form.Group className='reg'>
                    <Form.Label htmlFor="reg">Vehicle Registration</Form.Label>
                    <FormInput name='reg' placeholder='Vehicle Registration' value={this.state.reg} handleChange={this.handleChange} />
                    <span className='reg-message'>Replace unknown characters with underscores</span>
                </Form.Group>
                <Form.Group className='make'>
                    <Form.Label htmlFor="make">Make</Form.Label>
                    <FormInput name='make' placeholder='Make' value={this.state.make} handleChange={this.handleChange} />
                </Form.Group>
                <Form.Group className='model'>
                    <Form.Label htmlFor="model">Model</Form.Label>
                    <FormInput name='model' placeholder='Model' value={this.state.model} handleChange={this.handleChange} />
                </Form.Group>
                <Form.Group className='colour'>
                    <Form.Label htmlFor="colour">Colour</Form.Label>
                    <FormInput name='colour' placeholder='Colour' value={this.state.colour} handleChange={this.handleChange} />
                </Form.Group>
                <Form.Group className='regDate'>
                    <Form.Label htmlFor="regDate">Registration Date</Form.Label>
                    <DatePicker name='regDate' value={this.state.regDate} handleChange={this.handleDateChange} dateFormat='yyyy-MM-dd'/>
                </Form.Group>
                <Button variant='dark' id='submit-button' type='submit'>Search Vehicles</Button>
                <br />
                </Form>
            </div>
        )
    }
}


SearchVehicle.propTypes = {
    getVehicle: PropTypes.func.isRequired
  };
  
export default connect(null, { getVehicle })(SearchVehicle);