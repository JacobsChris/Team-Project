import React from 'react';
import FormInput from './FormInput';
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

        this.props.signIn(data);

        setTimeout(() => {
            if(this.props.admin[0]){
                this.props.history.push("/admin/");
            } else {
                this.props.history.push("/user/home/searchpeople");
            }
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

  function mapStateToProps(state) {
    return {
        admin: state.signin.isAdmin,
        signedIn: true
    }
}


export default connect(mapStateToProps, {signIn})(SignIn);