import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import store from '../redux/store';
import '../styles/nav.css';

class NavBar extends React.Component {

    signout = () => {
        if(localStorage.getItem('token')){
        store.dispatch({
            type: 'SIGN_OUT',
          value: ''
        });
            localStorage.clear();
    }
        this.props.history.push('./signin')

    }
    render(){
        return (
                <Navbar bg="dark" variant="dark" expand="md" className='main-nav'> 
                    <Link id='brand' className='mr-auto' to="/user/home">REDSHIFT</Link>
                    <Link className='nav-item' to="/user/home">HOME</Link>
                    <Link className='nav-item' to="/user/help">HELP</Link>
                    <Link className='nav-item' onClick={this.signout} to="/user/signin">SIGN OUT</Link>
                </Navbar>
        )
    }
}

export default NavBar;

