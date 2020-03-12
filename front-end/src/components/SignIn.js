import React from 'react';
import FormInput from './FormInput';
import axios from 'axios';
import { connect } from 'react-redux';
import { signIn } from '../redux/actions/signInAction';
import PropTypes from 'prop-types';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = ({target: {value, name}}) => {
        this.setState({[name]: value})
    }

    submit = (event) => {
        event.preventDefault();
        let data = {
            username: this.state.username,
            password: this.state.password            
        }


        console.log(data);

        this.props.signIn(data);
        // this.props.history.push("/user/home/searchpeople");
        setTimeout(() => {
            console.log(this.props)
            this.props.history.push("/user/home/searchpeople");
          }, 1000);
        
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submit}>
                    <fieldset>
                        <legend>
                            Sign In
                        </legend>
                        <div className='username'>
                            <label></label>
                            <FormInput name='username' value={this.state.username} handleChange={this.handleChange}/>
                        </div>
                        <div className='password'>
                            <label></label>
                            <FormInput name='password' type="password" value={this.state.password} handleChange={this.handleChange}/>
                        </div>
                        <input type="submit" value="Sign In" />
                    </fieldset>
                </form>
            </div>
        );
    }
}

SignIn.propTypes = {
    signIn: PropTypes.func.isRequired
  };

export default connect(null, { signIn })(SignIn);