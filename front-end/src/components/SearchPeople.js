import React from 'react';
import FormInput from './FormInput.js';
import '../styles/searchPeople.css';
import DatePicker from './DateSelector.js';
import "react-datepicker/dist/react-datepicker.css";
import Validation from './Validation.js';
import { Form, Container, Button } from 'react-bootstrap';


// const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
// const validEmailRegex = RegExp(/[A-Za-z0-9.]+@[A-Za-z.]+\.[A-Za-z]{2,3}$/);
const postcodeRegex = RegExp(/^(([gG][iI][rR] {0,}0[aA]{2})|(([aA][sS][cC][nN]|[sS][tT][hH][lL]|[tT][dD][cC][uU]|[bB][bB][nN][dD]|[bB][iI][qQ][qQ]|[fF][iI][qQ][qQ]|[pP][cC][rR][nN]|[sS][iI][qQ][qQ]|[iT][kK][cC][aA]) {0,}1[zZ]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yxA-HK-XY]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$/);
const houseNumberRegex = RegExp(/^[0-9]+[A-Za-z]?$/);
const nameRegex = RegExp(/^(([A-Za-z]{2,})|([A-Za-z]{2,})+[-]?([A-Za-z]{2,})|([A-Za-z]{2,})+[-]?([A-Za-z]{2,})+[-]?([A-Za-z]{2,}))$/);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

const countErrors = (errors) => {
  let count = 0;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (count = count+1)
  );
  return count;
}

export default class SearchPeople extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            forename: '',
            surname: '',
            dob: '',
            birthPlace: '',
            houseNumber: '',
            houseName: '',
            street: '',
            town: '',
            postcode: '',
            formValid: false,
            errorCount: null,
            errors: {
                forename: '',
                surname: '',
                dob: '',
                birthPlace: '',
                houseNumber: '',
                houseName: '',
                street: '',
                town: '',
                postcode: ''
            },
            date: {
                startDate: '',
                setStartDate: ''
            },
            modal: {
                open: false
            }
        }
    }

    handleDateChange = date => {
        console.log(date);
        this.setState({
            dob: date
        });
        console.log(this.state.dob);
    }

    handleChange = ({ target: {value, name}}) => {
        let errors = this.state.errors;
  
        switch (name) {
          case 'forename': 
            errors.forename = 
              value.length < 2
                ? 'First Name must be at least 2 characters long!'
                : '';
            break;
            case 'surname': 
            errors.surname = 
            (value.length === 0 || nameRegex.test(value))
                ? 'Surname must be at least 2 characters long!'
                : '';
            break;
            case 'dob': 
            errors.dob = 
              value.length < 2
                ? 'DOB'
                : '';
            break;
            case 'birthPlace': 
            errors.birthPlace = 
              value.length < 2
                ? 'Place of Birth'
                : '';
            break;
            case 'houseNumber': 
            errors.houseNumber = 
            (value.length === 0 || houseNumberRegex.test(value))
                ? ''
                : 'House Number is not valid';
            break;
            case 'houseName': 
            errors.houseName = 
              value.length < 2
                ? 'House Name'
                : '';
            break;
            case 'street': 
            errors.street = 
              value.length < 2
                ? 'street'
                : '';
            break;
            case 'town': 
            errors.town = 
              value.length < 2
                ? 'Twon'
                : '';
            break;
            case 'postcode': 
            errors.postcode = 
              postcodeRegex.test(value)
                ? ''
                : 'Postcode is not valid';
            break;
          default:
            break;
        }
    
        this.setState({errors, [name]: value});
    }

    submit = (event) => {
        event.preventDefault();
        this.setState({formValid: validateForm(this.state.errors)});
        this.setState({errorCount: countErrors(this.state.errors)});
        
        if(this.state.formValid){
            console.log(`First Name: ${this.state.forename}`);
            console.log(`DOB: ${this.state.dob}`);
            if(event.target.name === 'forename'){
                this.setState({
                    forename: event.target.value
                })
            } 
            else if(event.target.name === 'surname'){
                this.setState({
                    surname: event.target.value
                })
            }
            else if(event.target.name === 'dob'){
                this.setState({
                    dob: event.target.value
                })
            }
            else if(event.target.name === 'birthPlace'){
                this.setState({
                    birthPlace: event.target.value
                })
            }
            else if(event.target.name === 'houseNumber'){
                this.setState({
                    houseNumber: event.target.value
                })
            }
            else if(event.target.name === 'houseName'){
                this.setState({
                    houseName: event.target.value
                })
            }
            else if(event.target.name === 'street'){
                this.setState({
                    street: event.target.value
                })
            }
            else if(event.target.name === 'town'){
                this.setState({
                    town: event.target.value
                })
            }
            else if(event.target.name === 'postcode'){
                this.setState({
                    postcode: event.target.value
                })
            }
        }

    }

    render(){
        const {errors, formValid} = this.state;

        return(
            <div className='form-size'>
            <Form>
                <h2 className='form-header'>Search People</h2>
                <br/>
                <h5 className='form-header'>Please fill out one or more fields</h5>
                <br/>
                    <Form.Group className='forename'>
                        <Form.Label htmlFor="forename">First Name</Form.Label>
                            <FormInput name='forename' value={this.state.forename} handleChange={this.handleChange}/>
                            {errors.forename.length > 0 && 
                            <span className='error'>{errors.forename}</span>}
                    </Form.Group>
                    <Form.Group className='surname'>
                        <Form.Label htmlFor="surname">Last Name</Form.Label>
                        <FormInput name='surname' value={this.state.surname} handleChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group className='dob'>
                        <Form.Label htmlFor="dob">Date of Birth</Form.Label>
                        <DatePicker name='dob' value={this.state.dob}  handleChange={this.handleDateChange}/>
                        {errors.dob.length > 0 && 
                        <span className='error'>{errors.dob}</span>}
                    </Form.Group>
                    <Form.Group className='birthPlace'>
                        <Form.Label htmlFor="birthplace">Place of Birth</Form.Label>
                        <FormInput name='birthPlace' value={this.state.birthPlace} handleChange={this.handleChange}/>
                        {errors.birthPlace.length > 0 && 
                        <span className='error'>{errors.birthPlace}</span>}                              
                    </Form.Group>
                    <Form.Group className='houseNumber'>
                        <Form.Label htmlFor="houseNumber">House Number</Form.Label>
                        <FormInput name='houseNumber' value={this.state.houseNumber} handleChange={this.handleChange}/>
                        {errors.houseNumber.length > 0 && 
                        <span className='error'>{errors.houseNumber}</span>}
                    </Form.Group>
                    <Form.Group className='houseName'>
                        <Form.Label htmlFor="houseName">House Name</Form.Label>
                        <FormInput name='houseName' value={this.state.houseName} handleChange={this.handleChange}/>
                        {errors.houseName.length > 0 && 
                        <span className='error'>{errors.houseName}</span>}
                    </Form.Group>
                    <Form.Group className='street'>
                        <Form.Label htmlFor="street">Street Name</Form.Label>
                        <FormInput name='street' value={this.state.street} handleChange={this.handleChange}/>
                        {errors.street.length > 0 && 
                        <span className='error'>{errors.street}</span>}
                    </Form.Group>
                    <Form.Group className='town'>
                        <Form.Label htmlFor="town">Town</Form.Label>
                        <FormInput name='town' value={this.state.town} handleChange={this.handleChange}/>
                        {errors.town.length > 0 && 
                        <span className='error'>{errors.town}</span>}
                    </Form.Group>
                    <Form.Group className='postcode'>
                        <Form.Label htmlFor="postcode">Postcode</Form.Label>
                        <FormInput name='postcode' value={this.state.postcode} handleChange={this.handleChange}/>
                        {errors.postcode.length > 0 && 
                        <span className='error'>{errors.postcode}</span>}
                    </Form.Group>
                        <Button variant='dark' id='submit-button'>Submit</Button>
                        {/* <Modal /> */}
                        <br/>
                        {this.state.errorCount !== null ? <p className="form-status">Form is {formValid ? 'valid ✅' : 'invalid ❌'}</p> : <p className="form-status">Form not submitted</p>}
                </Form>
            </div>
        );
    }
}
