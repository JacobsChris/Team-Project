import React from 'react';

export default class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
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
                            <FormInput name='username' value={this.state.username}/>
                        </div>
                        <div className='password'>
                            <label></label>
                            <FormInput name='password' value={this.state.password}/>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}