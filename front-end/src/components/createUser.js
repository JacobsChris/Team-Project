import React, { Component } from 'react';
import FormInput from './FormInput';
import axios from 'axios';

class CreateUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            verUsername: '',
            password: '',
            verPassword: ''
        }
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        });
    }

    submit = (e) => {
        e.preventDefault();

        if(this.state.username === this.state.verUsername && this.state.password === this.state.verPassword) {
        let data = {
            username: this.state.username,
            verUsername: this.state.verUsername,
            password: this.state.password,
            verPassword: this.state.verPassword
        }

        

        axios.post('http://localhost:8080/register/', data)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err)
        })
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
                        <input type="submit" value="Create User" />
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default CreateUser;
