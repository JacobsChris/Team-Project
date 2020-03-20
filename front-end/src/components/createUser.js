import React, { Component } from 'react';
import FormInput from './FormInput';
import { connect } from 'react-redux';
import { createUser } from '../redux/actions/createUserAction';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import '../styles/form.css';

const passRegex = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/);
const usernameRegex = RegExp(/^[a-zA_Z0-9_-]{8,15}$/);

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            verUsername: '',
            password: '',
            verPassword: '',
            isAdmin: false,
            invalid: true,
            userMatch: false,
            passwordMatch: true,
            userError: '',
            passwordError: '',
            verUserError: '',
            verPasswordError: '',
            submitted: false
        }
    }

    handleChange = ({ target: { name, value, checked } }) => {
        value = name === 'isAdmin' ? checked : value;
        this.setState({
            [name]: value
        });
        this.validate(name, value);
    }

    validate = (name, value) => {
        if ((name === 'username') && !usernameRegex.test(value)) {
            this.setState({
                userError: 'Username is invalid'
            })
        }
        else if ((name === 'verUsername') && !usernameRegex.test(value)) {
            this.setState({
                verUserError: 'Username is invalid'
            })
        }
        else if ((name === 'password') && !passRegex.test(value)) {
            this.setState({
                passwordError: 'Password is invalid'
            })
        }
        else if ((name === 'verPassword') && !passRegex.test(value)) {
            this.setState({
                verPasswordError: 'Password is invalid'
            })
        }
        else if ((name === 'verUsername') && usernameRegex.test(value)) {
            this.setState({
                verUserError: ''
            })
        }
        else if ((name === 'username') && usernameRegex.test(value)) {
            this.setState({
                userError: ''
            })
        }
        else if ((name === 'verPassword') && passRegex.test(value)) {
            this.setState({
                verPasswordError: ''
            })
        }
        else if ((name === 'password') && passRegex.test(value)) {
            this.setState({
                passwordError: ''
            })
        }
    }

    submit = (e) => {
        e.preventDefault();

        if ((this.state.password === this.state.verPassword) && this.state.username === this.state.verUsername) {
            let data = {
                username: this.state.username,
                password: this.state.password,
                isAdmin: this.state.isAdmin
            }

            console.log(data);

            this.props.createUser(data);
            this.props.history.push('/admin');
        }
    }

    render() {
        return (
            <div className='form-size'>
                <Form onSubmit={this.submit}>
                    <h2 className='form-header'>Create User</h2>
                    <br />
                    <Form.Group className='username'>
                        <Form.Label>Username</Form.Label>
                        <FormInput name='username' placeholder='Username' value={this.state.username} handleChange={this.handleChange} />
                        {this.state.userError !== '' ? <span>{this.state.userError}</span> : ''}
                    </Form.Group>
                    <Form.Group className='username'>
                        <Form.Label>Confirm username</Form.Label>
                        <FormInput name='verUsername' placeholder='Confirm username' value={this.state.verUsername} handleChange={this.handleChange} />
                        {this.state.verUserError !== '' ? <span>{this.state.verUserError}</span> : ''}
                        {((this.state.username !== this.state.verUsername))  ?
                            <span>Usernames do not match</span> : ''}
                    </Form.Group>
                    <Form.Group className='password'>
                        <Form.Label>Password</Form.Label>
                        <FormInput name='password' type="password" placeholder='Password' value={this.state.password} handleChange={this.handleChange} />
                        {this.state.passwordError !== '' ? <span>{this.state.passwordError}</span> : ''}
                    </Form.Group>
                    <Form.Group className='password'>
                        <Form.Label>Confirm password</Form.Label>
                        <FormInput name='verPassword' type="password" placeholder='Confirm password' value={this.state.verPassword} handleChange={this.handleChange} />
                        {((this.state.password !== this.state.verPassword))  ?
                            <span>Passwords do not match</span> : ''}
                    </Form.Group>
                    <Form.Check type="checkbox" label="Make admin" name="isAdmin" onChange={this.handleChange} />
                    <br />
                    <Button variant='dark' id='submit-button' type='submit'>Create User</Button>
                    {!this.state.submitted ? <p className="form-status">Form is {!this.state.invalid ? 'valid ✅' : 'invalid ❌'}</p> : <p className="form-status">Form not submitted</p>}
                </Form>
            </div>
        )
    }
}

CreateUser.propTypes = {
    createUser: PropTypes.func.isRequired
};

export default connect(null, { createUser })(CreateUser);
