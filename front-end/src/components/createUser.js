import React, { Component } from 'react';
import FormInput from './FormInput';
import { connect } from 'react-redux';
import { createUser } from '../redux/actions/createUserAction';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import '../styles/form.css';

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            verUsername: '',
            password: '',
            verPassword: '',
            isAdmin: false
        }
    }

    handleChange = ({ target: { name, value, checked } }) => {
        value = name === 'isAdmin' ? checked : value;
        this.setState({
            [name]: value
        });
    }

    submit = (e) => {
        e.preventDefault();

        if (this.state.username === this.state.verUsername && this.state.password === this.state.verPassword) {
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
                    <h3 className='form-header'>Create User</h3>
                    <Form.Group className='username'>
                        <Form.Label>Username</Form.Label>
                        <FormInput name='username' placeholder='Username' value={this.state.username}
                            handleChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group className='username'>
                        <Form.Label>Verify username</Form.Label>
                        <FormInput name='verUsername' placeholder='Verify username' value={this.state.verUsername}
                            handleChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group className='password'>
                        <Form.Label>Password</Form.Label>
                        <FormInput name='password' type="password" value={this.state.password} handleChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group className='password'>
                        <Form.Label>Verify password</Form.Label>
                        <FormInput name='verPassword' type="password" value={this.state.verPassword} handleChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group className='admin'>
                        <Form.Check label='Make admin' name="isAdmin" type="checkbox" onChange={this.handleChange} />
                    </Form.Group>
                    <Button variant='dark' id='submit-button' type="submit" value="Create User">Add User</Button>
                </Form>
            </div>
        )
    }
}

CreateUser.propTypes = {
    createUser: PropTypes.func.isRequired
};

export default connect(null, { createUser })(CreateUser);
