import React from 'react';
import FormInput from './FormInput.js';
import '../styles/form.css';
import DatePicker from './DateSelector.js';
import "react-datepicker/dist/react-datepicker.css";
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
// import { getPeople } from '../redux/actions/getAction';
// import PropTypes from 'prop-types';

const postcodeRegex = RegExp(/^(([gG][iI][rR] {0,}0[aA]{2})|(([aA][sS][cC][nN]|[sS][tT][hH][lL]|[tT][dD][cC][uU]|[bB][bB][nN][dD]|[bB][iI][qQ][qQ]|[fF][iI][qQ][qQ]|[pP][cC][rR][nN]|[sS][iI][qQ][qQ]|[iT][kK][cC][aA]) {0,}1[zZ]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yxA-HK-XY]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$/);
const nameRegex = RegExp(/^(([A-Za-z ]{2,})|([A-Za-z]{2,})+[-]?([A-Za-z]{2,})|([A-Za-z]{2,})+[-]?([A-Za-z]{2,})+[-]?([A-Za-z]{2,}))$/);
const dobRegex = RegExp(/^(0[1-9]|1[0-2])-(0[1-9]|1\d|2\d|3[01])-(19|20)\d{2}$/);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
};

const countErrors = (errors) => {
  let count = 0;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (count = count + 1)
  );
  return count;
};

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
      done: false,
      loading: false,
      errors: {
        forename: '',
        surname: '',
        dob: '',
        birthPlace: '',
        postcode: ''
      }                
    }
  }

  handleDateChange = (event) => {
    this.setState({
      dob: event
    });
  };

  handleChange = ({ target: { value, name } }) => {

    let errors = this.state.errors;

    switch (name) {
      case 'forename':
        errors.forename = '';
        if (value.length !== 0 && value.length < 2) {
          errors.forename = 'First name must be at least 2 characters long!';
        }
        else if (value.length !== 0 && value.length > 50) {
          errors.forename = 'First name must be under 50 charcters';
        }
        else if (!nameRegex.test(value) && value.length !== 0) {
          errors.forename = 'First name can only contain letters and hyphens'
        }
        break;
      case 'surname':
        errors.surname = '';
        if (value.length !== 0 && value.length < 2) {
          errors.surname = 'Last name must be at least 2 characters long!';
        }
        else if (value.length !== 0 && value.length > 50) {
          errors.surname = 'Last name must be under 50 charcters';
        }
        else if (value.length !== 0 && !nameRegex.test(value)) {
          errors.surname = 'Last name can only contain letters and hyphens'
        }
        break;
      case 'dob':
        errors.dob = '';
        if (value.length !== 0 && !dobRegex.test(value)) {
          errors.dob = 'Dates must be in the format DD/MM/YYYY';
        }
        else if (value.length > 10) {
          errors.dob = 'Dates must be in the format DD/MM/YYYY';
        }
        break;
      case 'birthPlace':
        errors.birthPlace = '';
        if (value.length !== 0 && value.length < 2) {
          errors.birthPlace = 'Place of birth must be at least 2 characters long!';
        }
        else if (value.length !== 0 && value.length > 50) {
          errors.birthPlace = 'Place of birth must be under 50 charcters';
        }
        else if (value.length !== 0 && !nameRegex.test(value)) {
          errors.birthPlace = 'Place of birth can only contain letters and hyphens';
        }
        break;
      case 'postcode':
        errors.postcode = '';
        if (value.length !== 0 && !postcodeRegex.test(value)) {
          errors.postcode = 'Please enter a valid postcode';
        }
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
    this.setState({ formValid: validateForm(this.state.errors) });
    this.setState({ errorCount: countErrors(this.state.errors) });
  }

  submit = (event) => {
    event.preventDefault();

    if (this.state.formValid) {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    let date = this.state.dob;

    if (this.state.dob) {
      date = `${date.getFullYear()}-${(date.getMonth() + 1) < 10 ? 0 + ((date.getMonth() + 1).toString()) : date.getMonth() + 1}-${date.getDate()}`;
    }

    let getEmpty = () => {
      let length = this.state.forename.length + this.state.surname.length + this.state.dob.length + this.state.birthPlace.length + this.state.postcode.length;
      return length;
    };

    const data = {
      citizenID: this.state.citizenID,
      forenames: this.state.forename,
      surname: this.state.surname,
      homeAddress: this.state.postcode,
      dateOfBirth: date,
      placeOfBirth: this.state.birthPlace,
      sex: this.state.gender
    };

    if (this.state.formValid && getEmpty) {
      if(!this.props.admin){
        if (window.location.pathname !== '/user/home/peopleresults') {
          this.props.history.push('/user/home/peopleresults', data);
        }
      } else {
        if (window.location.pathname !== '/admin/peopleresults') {
          this.props.history.push('/admin/peopleresults', data);
        }
      }
    }
  };

  render() {
    const { errors, formValid } = this.state;

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
          </Form.Group>
          <Form.Group className='surname'>
            <Form.Label htmlFor="surname">Last Name</Form.Label>
            <FormInput name='surname' placeholder='Surname' value={this.state.surname} handleChange={this.handleChange} />
            {errors.surname.length > 0 &&
              <span className='error'>{errors.surname}</span>}
          </Form.Group>
          <Form.Group className='dob'>
            <Form.Label htmlFor="dob">Date of Birth</Form.Label>
            <DatePicker name='dob' value={this.state.dob} handleChange={this.handleDateChange} dateFormat='dd-MM-yyyy' />
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

// SearchPeople.propTypes = {
//   getPeople: PropTypes.func.isRequired
// };

function mapStateToProps(state){
  return {
    admin: state.signin.isAdmin
  }
}

export default connect(mapStateToProps)(SearchPeople);
