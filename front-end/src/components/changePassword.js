import React, { Component } from 'react';
import FormInput from './FormInput';
import { connect } from 'react-redux';
import { setPass } from '../redux/actions/setPassAction';
import PropTypes from 'prop-types';

class ChangePassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            password: '',
            verPassword: ''
        }
    }

    handleChange = ({target : {name, value}}) => {
        this.setState({
            [name]: value
        })
    }

    submit = (e) => {
        e.preventDefault();

        if(this.state.password === this.state.verPassword) {
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
            <div>
                <form onSubmit={this.submit}>
                    <fieldset>
                        <legend>
                            Change Password
                        </legend>
                        <p>Username: </p>
                        <div className='password'>
                            <label></label>
                            <FormInput name='password' type="password" value={this.state.password} handleChange={this.handleChange}/>
                        </div>
                        <div className='password'>
                            <label></label>
                            <FormInput name='verPassword' type="password" value={this.state.verPassword} handleChange={this.handleChange}/>
                        </div>
                        <input type="submit" value="Change Password" />
                    </fieldset>
                </form>
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