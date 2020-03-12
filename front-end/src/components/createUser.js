import React, { Component } from 'react';
import FormInput from './FormInput';
import { connect } from 'react-redux';
import { getUser } from '../redux/actions/userAction';
import PropTypes from 'prop-types';

class CreateUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            verUsername: '',
            password: '',
            verPassword: '',
            isAdmin: false
        }
    }

    handleChange = ({target: {name, value, checked}}) => {
        value = name === 'isAdmin' ? checked : value;
        this.setState({
            [name]: value
        });
    }

    submit = (e) => {
        e.preventDefault();

        if(this.state.username === this.state.verUsername && this.state.password === this.state.verPassword) {
        let data = {
            username: this.state.username,
            password: this.state.password,
            isAdmin: this.state.isAdmin
        }

        console.log(data);

        this.props.getUser(data);
    
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
                        </div>
                        <div className='username'>
                            <label></label>
                            <FormInput name='verUsername' value={this.state.verUsername} handleChange={this.handleChange}/>
                        </div>
                        <div className='password'>
                            <label></label>
                            <FormInput name='password' type="password" value={this.state.password} handleChange={this.handleChange}/>
                        </div>
                        <div className='password'>
                            <label></label>
                            <FormInput name='verPassword' type="password" value={this.state.verPassword} handleChange={this.handleChange}/>
                        </div>
                        <div className='admin'>
                            <label>
                                Make Admin:
                                    <input name="isAdmin" type="checkbox" onChange={this.handleChange}/>
                            </label>
                        </div>
                        <input type="submit" value="Create User" />
                    </fieldset>
                </form>
            </div>
        )
    }
}

CreateUser.propTypes = {
    getUser: PropTypes.func.isRequired
  };
  
export default connect(null, { getUser })(CreateUser);
