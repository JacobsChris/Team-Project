import React, { Component } from 'react';
import FormInput from './FormInput';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setPass } from '../redux/actions/setPassAction';
import PropTypes from 'prop-types';
import '../styles/form.css';

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            verPassword: ''
        }
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        })
    }

    submit = (e) => {
        e.preventDefault();

        if (this.state.password === this.state.verPassword) {
            let data = {
                username: this.props.username,
                password: this.state.password,
                isAdmin: this.props.admin
            }

            console.log(data);

            this.props.setPass(data);

            this.props.history.push('/admin');

            this.props.setPass();
        }
    }

    render() {
        return (
            <div className='form-size'>
                <Form onSubmit={this.submit}>
                    <h2 className='form-header'>Change password</h2>
                    <br />
                    <Form.Group className='password'>
                        <label></label>
                        <FormInput name='password' type="password" placeholder="Password" 
                        value={this.state.password} handleChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group className='password'>
                        <label></label>
                        <FormInput name='verPassword' type="password" placeholder="Confirm password"
                        value={this.state.verPassword} handleChange={this.handleChange} />
                    </Form.Group>
                    <Button variant='dark' id='submit-button' type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}

ChangePassword.propTypes = {
    setPass: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        admin: state.signin.isAdmin,
        username: state.signin.username,
    }
}

export default connect(mapStateToProps, { setPass })(ChangePassword);