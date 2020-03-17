import React, { Component } from 'react';
import FormInput from './FormInput.js';
import "react-datepicker/dist/react-datepicker.css";
import { Form, Button } from 'react-bootstrap';
import '../styles/searchVehicle.css';

const vehicleRegex = RegExp(/^[A-Z_]{2}[0-9_]{2}[A-Z_]{3}$/);
export default class SearchVehicle extends Component {
    constructor(props){
        super(props);
        this.state = ({
            reg: '',
            invalid: true,
            error: '',
            submitted: false
        });
    }

    handleChange = ({target: {name, value}}) => {
        value = value.toUpperCase().trim();
        this.setState({
            [name]: value
        })
        if(!vehicleRegex.test(value)){
            this.setState({
                error: 'License plate is invalid'
            })
        } else {
            this.setState({
                error: '',
                invalid: false
            })
        }
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
        if(!this.state.invalid){
            this.setState({
                submitted: true
            })
            if (window.location.pathname !== '/user/home/vehicleresults'){
                this.props.history.push('/user/home/vehicleresults?plate=' + reg);
            }
        }
      }

    render() {
        return (
            <div className='form-size'>
                <Form onSubmit={this.submit}>
                <h2 className='form-header'>Search Vehicle</h2>
                <br />
                <span className='reg-message'>Replace unknown characters with underscores</span>
                <br />
                <Form.Group className='reg'>
                    <Form.Label htmlFor="reg">Vehicle Registration</Form.Label>
                    <FormInput name='reg' placeholder='Vehicle Registration' value={this.state.reg} handleChange={this.handleChange} />
                </Form.Group>
                {this.state.invalid ? 
                <span>{this.state.error}</span> : ''}
                <Button variant='dark' id='submit-button' type='submit'>Search Vehicles</Button>
                <br />
                </Form>{console.log(this.state.error)}
                {!this.state.submitted ? <p className="form-status">Form is {!this.state.invalid ? 'valid ✅' : 'invalid ❌'}</p> : <p className="form-status">Form not submitted</p>}
            </div>
        )
    }
}
