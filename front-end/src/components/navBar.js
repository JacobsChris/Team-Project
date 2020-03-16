import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import store from '../redux/store';

class NavBar extends React.Component {

    signout = () => {
        store.dispatch({
            type: 'SIGN_OUT',
          value: ''
        });
        // if(localStorage.getItem('token')){
        //     console.log('1')
        //     localStorage.clear();
        // }
        this.props.history.push('./signin')
    }
    render(){
        return (
                <Navbar bg="dark" variant="dark" expand="md" className='main-nav'> 
                    <Link id='brand' className='mr-auto' to="/user/home">REDSHIFT</Link>
                    <Link to="/user/home">HOME</Link>
                    <Link to="/user/help">HELP</Link>
                    <Link onClick={this.signout} to="/user/signin">SIGN OUT</Link>
                </Navbar>
        )
    }
}

export default NavBar;

