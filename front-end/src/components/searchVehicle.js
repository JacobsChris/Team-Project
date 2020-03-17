import React, { Component } from 'react';
import FormInput from './FormInput.js';
import "react-datepicker/dist/react-datepicker.css";
import { Form, Button } from 'react-bootstrap';
import '../styles/form.css';

export default class SearchVehicle extends Component {
    constructor(props){
        super(props);
        this.state = ({
            reg: '',
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
        
        const reg = this.state.reg;
    
        if (window.location.pathname !== '/user/home/vehicleresults'){
          this.props.history.push('/user/home/vehicleresults?plate=' + reg);
        }
      }

    render() {
        return (
            <div className='form-size'>
                <Form onSubmit={this.submit}>
                <h2 className='form-header'>Search Vehicle</h2>
                <br />
                <Form.Group className='reg'>
                    <Form.Label htmlFor="reg">Vehicle Registration</Form.Label>
                    <FormInput name='reg' placeholder='Vehicle Registration' value={this.state.reg} handleChange={this.handleChange} />
                    <span className='reg-message'>Replace unknown characters with underscores</span>
                </Form.Group>
                <Button variant='dark' id='submit-button' type='submit'>Search Vehicles</Button>
                <br />
                </Form>
            </div>
        )
    }
}
