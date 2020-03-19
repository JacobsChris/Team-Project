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
        if((name === 'username') && !usernameRegex.test(value)){
            this.setState({
                userError: 'Username is invalid'
            })
        } 
        else if((name === 'verUsername') && !usernameRegex.test(value)){
            this.setState({
                verUserError: 'Username is invalid'
            })
        } 
        else if((name === 'password') && !passRegex.test(value)){
            this.setState({
                passwordError: 'Password is invalid'
            })
        } 
        else if((name === 'verPassword') && !passRegex.test(value)){
            this.setState({
                verPasswordError: 'Password is invalid'
            })
        } 
        else if((name === 'verUsername') && usernameRegex.test(value)){
            this.setState({
                verUserError: ''
            })
        } 
        else if((name === 'username') && usernameRegex.test(value)){
            this.setState({
                userError: ''
            })
        } 
        else if((name === 'verPassword') && passRegex.test(value)){
            this.setState({
                verPasswordError: ''
            })
        } 
        else if((name === 'password') && passRegex.test(value)){
            this.setState({
                passwordError: ''
            })
        } 
        if((this.state.username === this.state.verUsername)){
            this.setState({
                userMatch: true
            })
        } 
        if((this.state.password !== this.state.verPassword)) {
            this.setState({
                passwordMatch: false
            })
        }
    }

    submit = (e) => {
        e.preventDefault();

        if((this.state.passwordMatch && this.state.userMatch) && !this.state.invalid) {
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
            <div>
                <form onSubmit={this.submit}>
                    <fieldset>
                        <legend>
                            Create User
                        </legend>
                        <div className='username'>
                            <label></label>
                            <FormInput name='username' value={this.state.username} handleChange={this.handleChange}/>
                        </div>{console.log(this.state.userError)}
                        {this.state.userError !== '' ? <span>{this.state.userError}</span> : ''}
                        <div className='username'>
                            <label></label>
                            <FormInput name='verUsername' value={this.state.verUsername} handleChange={this.handleChange}/>
                        </div>
                        {this.state.verUserError !== '' ? <span>{this.state.verUserError}</span> : ''}
                        {((this.state.username && this.state.verUsername) !== '') && this.state.userMatch ? 
                        <span>Usernames do not match</span> : ''}
                        <div className='password'>
                            <label></label>
                            <FormInput name='password' type="password" value={this.state.password} handleChange={this.handleChange}/>
                        </div>
                        {this.state.passwordError !== '' ? <span>{this.state.passwordError}</span> : ''}
                        <div className='password'>
                            <label></label>
                            <FormInput name='verPassword' type="password" value={this.state.verPassword} handleChange={this.handleChange}/>
                        </div>
                        {this.state.verPasswordError !== '' ? <span>{this.state.verPasswordError}</span> : ''} {!this.state.passwordMatch ? 
                        <span>Passwords do not match</span> : ''}
                        <div className='admin'>
                            <label>
                                Make Admin:
                                    <input name="isAdmin" type="checkbox" onChange={this.handleChange}/>
                            </label>
                        </div>
                        <input type="submit" value="Create User" />
                        {!this.state.submitted ? <p className="form-status">Form is {!this.state.invalid ? 'valid ✅' : 'invalid ❌'}</p> : <p className="form-status">Form not submitted</p>}
                    </fieldset>
                </form>
            </div>
        )
    }
}

CreateUser.propTypes = {
    createUser: PropTypes.func.isRequired
};

export default connect(null, { createUser })(CreateUser);
