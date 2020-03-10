import React from 'react';
import FormInput from './FormInput';
import axios from 'axios';
import { connect } from 'react-redux';
import { addToken } from '../js/actions/index';
import store from '../js/store';
import App from '../App';

function  mapDispatchToProps(dispatch){
    console.log('token');
    return { 
        addToken: token => dispatch(addToken(token))
    };
}

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
        axios.post('http://localhost:8080/login/', data)
        .then(res => {
            console.log(res);
            sessionStorage.setItem('jwt', res.data.token);
            this.props.addToken(res.data.token);
            this.props.history.push("/user/home/searchpeople");
        }).catch(err => {
            console.log(err);
        });  
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

  export default connect(null, mapDispatchToProps)(SignIn);