import React from 'react';
import FormInput from './FormInput';
import Axios from 'axios';

export default class SignIn extends React.Component {
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

    submit = () => {
        
    }

    render(){
        return(
            <div>
                <form>
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
                            <FormInput name='password' value={this.state.password} handleChange={this.handleChange}/>
                        </div>
                        <button onClick={this.submit}>Sign In</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}