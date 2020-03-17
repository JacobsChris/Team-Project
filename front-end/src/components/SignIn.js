import React from 'react';
import FormInput from './FormInput';
import { connect } from 'react-redux';
import { signIn } from '../redux/actions/signInAction';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import '../styles/form.css';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: false
        }
    }

    handleChange = ({ target: { value, name } }) => {
        this.setState({ [name]: value })
    }

    submit = (event) => {
        event.preventDefault();
        let data = {
            username: this.state.username,
            password: this.state.password
        }

        this.props.signIn(data);

        setTimeout(() => {
            if (localStorage.getItem('token')) {
                if (this.props.admin[0]) {
                    this.props.history.push("/admin/searchpeople");
                } else {
                    this.props.history.push("/user/home/searchpeople");
                }
            } else {
                this.setState({
                    error: true
                })
            }
        }, 1000);
    }

    render() {
        return (
            <div className='form-size'>
                <Form onSubmit={this.submit}>
                    <h2 className='form-header'>Sign In</h2>
                    <Form.Group className='username'>
                        <Form.Label>Username</Form.Label>
                        <FormInput name='username' value={this.state.username} handleChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group className='password'>
                        <Form.Label>Password</Form.Label>
                        <FormInput name='password' type="password" value={this.state.password} handleChange={this.handleChange} />
                        {this.state.error ? <span className='error'>Invalid username or password</span> : ''}
                    </Form.Group>
                    <Button variant='dark' id='submit-button' type="submit">Sign In</Button>
                </Form>
            </div>
        );
    }
}

SignIn.propTypes = {
    signIn: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        admin: state.signin.isAdmin,
        signedIn: true
    }
}

export default connect(mapStateToProps, { signIn })(SignIn);