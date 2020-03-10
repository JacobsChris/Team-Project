import React from 'react';
import FormInput from './FormInput.js';
import '../styles/searchPeople.css';
import DatePicker from './DateSelector.js';
import "react-datepicker/dist/react-datepicker.css";
// import Validation from './Validation.js';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getPeople } from '../actions/getAction';
import PropTypes from 'prop-types';

const postcodeRegex = RegExp(/^(([gG][iI][rR] {0,}0[aA]{2})|(([aA][sS][cC][nN]|[sS][tT][hH][lL]|[tT][dD][cC][uU]|[bB][bB][nN][dD]|[bB][iI][qQ][qQ]|[fF][iI][qQ][qQ]|[pP][cC][rR][nN]|[sS][iI][qQ][qQ]|[iT][kK][cC][aA]) {0,}1[zZ]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yxA-HK-XY]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$/);
const houseNumberRegex = RegExp(/^[0-9]+[A-Za-z]?$/);
const nameRegex = RegExp(/^(([A-Za-z]{2,})|([A-Za-z]{2,})+[-]?([A-Za-z]{2,})|([A-Za-z]{2,})+[-]?([A-Za-z]{2,})+[-]?([A-Za-z]{2,}))$/);
// const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
// const validEmailRegex = RegExp(/[A-Za-z0-9.]+@[A-Za-z.]+\.[A-Za-z]{2,3}$/);

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
    (val) => val.length > 0 && (count = count + 1)
  );
  return count;
}

class SearchPeople extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      citizenID: '',
      forename: '',
      surname: '',
      dob: '',
      birthPlace: '',
      postcode: '',
      gender: '',
      formValid: false,
      errorCount: null,
      errors: {
        forename: '',
        surname: '',
        dob: '',
        birthPlace: '',
        postcode: ''
      },
      date: {
        startDate: '',
        setStartDate: ''
      }
    }
  }

  handleDateChange = (event) => {
    this.setState({
        dob: event
    });
  }

  handleChange = ({ target: { value, name } }) => {
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
      case 'postcode':
        errors.postcode =
          value.length < 2
            ? 'Postcode'
            : '';
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  }

  submit = (event) => {
    event.preventDefault();
    this.setState({ formValid: validateForm(this.state.errors) });
    this.setState({ errorCount: countErrors(this.state.errors) });

    if (this.state.formValid) {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    let date = this.state.dob;

    if(this.state.dob){
      date = `${date.getFullYear()}-${(date.getMonth()+1) < 10?  0+ ((date.getMonth()+1).toString()) : date.getMonth()+1}-${date.getDate()}`;
    }

    const data = {
      citizenID: this.state.citizenID,
      forenames: this.state.forename,
      surname: this.state.surname,
      homeAddress: this.state.postcode,
      dateOfBirth: date,
      placeOfBirth: this.state.birthPlace,
      sex: this.state.gender
    }

    this.props.getPeople(data);

    if (window.location.pathname != '/user/home/peopleresults'){
      this.props.history.push('/user/home/peopleresults');
    }
  }

  render() {
    const { errors, formValid } = this.state;
    const { startDate, setStartDate } = this.state.date;
    return (
      <div className='form-size'>
        <Form onSubmit={this.submit}>
          <h2 className='form-header'>Search People</h2>
          <br />
          <h5 className='form-header'>Please fill out one or more fields</h5>
          <br />
          <Form.Group className='forename'>
            <Form.Label htmlFor="forename">First Name</Form.Label>
            <FormInput name='forename' placeholder='Forenames' value={this.state.forename} handleChange={this.handleChange} />
            {errors.forename.length > 0 &&
              <span className='error'>{errors.forename}</span>}
            {/* <span className='error'><Validation /></span> */}
          </Form.Group>
          <Form.Group className='surname'>
            <Form.Label htmlFor="surname">Last Name</Form.Label>
            <FormInput name='surname' placeholder='Surname' value={this.state.surname} handleChange={this.handleChange} />
          </Form.Group>
          <Form.Group className='dob'>
            <Form.Label htmlFor="dob">Date of Birth</Form.Label>
            <DatePicker name='dob' value={this.state.dob} handleChange={this.handleDateChange} dateFormat='yyyy-MM-dd'/>
            {errors.dob.length > 0 &&
              <span className='error'>{errors.dob}</span>}
          </Form.Group>
          <Form.Group className='birthPlace'>
            <Form.Label htmlFor="birthplace">Place of Birth</Form.Label>
            <FormInput name='birthPlace' placeholder='Place of Birth' value={this.state.birthPlace} handleChange={this.handleChange} />
            {errors.birthPlace.length > 0 &&
              <span className='error'>{errors.birthPlace}</span>}
          </Form.Group>
          <Form.Group className='postcode'>
            <Form.Label htmlFor="postcode">Postcode</Form.Label>
            <FormInput name='postcode' placeholder='Postcode' value={this.state.postcode} handleChange={this.handleChange} />
            {errors.postcode.length > 0 &&
              <span className='error'>{errors.postcode}</span>}
          </Form.Group>
          <Button variant='dark' id='submit-button' type='submit'>Submit</Button>
          <br />
          {this.state.errorCount !== null ? <p className="form-status">Form is {formValid ? 'valid ✅' : 'invalid ❌'}</p> : <p className="form-status">Form not submitted</p>}
        </Form>
      </div>
    );
  }
}

SearchPeople.propTypes = {
  getPeople: PropTypes.func.isRequired
};

export default connect(null, { getPeople })(SearchPeople);
