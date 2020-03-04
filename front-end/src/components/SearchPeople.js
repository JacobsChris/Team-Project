import React from 'react';
import FormInput from './FormInput.js';
import '../styles/SignIn.css';
import DatePicker from './DateSelector.js';
import "react-datepicker/dist/react-datepicker.css"


// const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
// const validEmailRegex = RegExp(/[A-Za-z0-9.]+@[A-Za-z.]+\.[A-Za-z]{2,3}$/);
const postcodeRegex = RegExp(/^(([gG][iI][rR] {0,}0[aA]{2})|(([aA][sS][cC][nN]|[sS][tT][hH][lL]|[tT][dD][cC][uU]|[bB][bB][nN][dD]|[bB][iI][qQ][qQ]|[fF][iI][qQ][qQ]|[pP][cC][rR][nN]|[sS][iI][qQ][qQ]|[iT][kK][cC][aA]) {0,}1[zZ]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yxA-HK-XY]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$/);

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
            }
        }
    }

    handleDateChange = date => {
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
              value.length < 2
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
              value.length < 2
                ? 'House Number'
                : '';
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
          // case 'email': 
          //   errors.email = 
          //     validEmailRegex.test(value)
          //       ? ''
          //       : 'Email is not valid!';
          //   break;
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
            console.log(`Surname: ${this.state.surname}`);
            console.log(`DOB: ${this.state.dob}`);
            console.log(`Place of Birth: ${this.state.birthPlace}`);
            console.log(`House No:: ${this.state.houseNumber}`);
            console.log(`House Name: ${this.state.houseName}`);
            console.log(`Street: ${this.state.street}`);
            console.log(`Town: ${this.state.town}`);
            console.log(`Postcode: ${this.state.postcode}`);
            if(event.target.name === 'forename'){
                this.setState({
                    forename: event.target.value
                })
            } else if(event.target.name === 'surname'){
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
                console.log(this.state.postcode);
            }
        }

    }

    render(){
        const {errors, formValid} = this.state;
        const {startDate, setStartDate} = this.state.date;
        return(
            <div className='wrapper'>
                <div className='form-wrapper'>
                    <form>
                        <fieldset>
                            <legend>Search People</legend>
                            <div className='forename'>
                                <label htmlFor="forename">First Name</label>
                                <FormInput name='forename' value={this.state.forename} handleChange={this.handleChange}/>
                                {errors.forename.length > 0 && 
                                <span className='error'>{errors.forename}</span>}
                            </div>
                            <div className='surname'>
                                <label htmlFor="surname">Last Name</label>
                                <FormInput name='surname' value={this.state.surname} handleChange={this.handleChange}/>
                                {errors.surname.length > 0 && 
                                <span className='error'>{errors.surname}</span>}
                            </div>
                            <div className='dob'>
                                <label htmlFor="dob">Date of Birth</label>
                                {/* <FormInput name='dob' value={this.state.dob} handleChange={this.handleChange} */}
                                    <DatePicker name='dob' value={this.state.dob} handleChange={this.handleDateChange}/>
                                {/* /> */}
                                {errors.dob.length > 0 && 
                                <span className='error'>{errors.dob}</span>}
                            </div>
                            <div className='birthPlace'>
                                <label htmlFor="birthplace">Place of Birth</label>
                                <FormInput name='birthPlace' value={this.state.birthPlace} handleChange={this.handleChange}/>
                                {errors.birthPlace.length > 0 && 
                                <span className='error'>{errors.birthPlace}</span>}
                            </div>
                            <div className='houseNumber'>
                                <label htmlFor="houseNumber">House Number</label>
                                <FormInput name='houseNumber' value={this.state.houseNumber} handleChange={this.handleChange}/>
                                {errors.houseNumber.length > 0 && 
                                <span className='error'>{errors.houseNumber}</span>}
                            </div>
                            <div className='houseName'>
                                <label htmlFor="houseName">House Name</label>
                                <FormInput name='houseName' value={this.state.houseName} handleChange={this.handleChange}/>
                                {errors.houseName.length > 0 && 
                                <span className='error'>{errors.houseName}</span>}
                            </div>
                            <div className='street'>
                                <label htmlFor="street">Street Name</label>
                                <FormInput name='street' value={this.state.street} handleChange={this.handleChange}/>
                                {errors.street.length > 0 && 
                                <span className='error'>{errors.street}</span>}
                            </div>
                            <div className='town'>
                                <label htmlFor="town">Town</label>
                                <FormInput name='town' value={this.state.town} handleChange={this.handleChange}/>
                                {errors.town.length > 0 && 
                                <span className='error'>{errors.town}</span>}
                            </div>
                            <div className='postcode'>
                                <label htmlFor="postcode">Postcode</label>
                                <FormInput name='postcode' value={this.state.postcode} handleChange={this.handleChange}/>
                                {errors.postcode.length > 0 && 
                                <span className='error'>{errors.postcode}</span>}
                            </div>
                        <button onClick={this.submit}>Submit</button>
                        {this.state.errorCount !== null ? <p className="form-status">Form is {formValid ? 'valid ✅' : 'invalid ❌'}</p> : 'Form not submitted'}
                    </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}
