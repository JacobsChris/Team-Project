import React, { Component } from 'react';
import FormInput from './FormInput.js';
import DatePicker from './DateSelector.js';
import "react-datepicker/dist/react-datepicker.css";
import { Form, Button } from 'react-bootstrap';
import '../styles/searchVehicle.css';

export default class SearchVehicle extends Component {
    constructor(props){
        super(props);
        this.state = ({
            reg: '',
            make: '',
            model: '',
            colour: '',
            regDate: '',
            owner: ''
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

    submit = () => {

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
                <Form.Group className='owner'>
                    <Form.Label htmlFor="owner">Owner Name</Form.Label>
                    <FormInput name='owner' placeholder='Owner' value={this.state.owner} handleChange={this.handleChange} />
                </Form.Group>
                <Button variant='dark' id='submit-button' type='submit'>Search Vehicles</Button>
                <br />
                </Form>
            </div>
        )
    }
}
