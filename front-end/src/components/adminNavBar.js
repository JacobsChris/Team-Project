import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import store from '../redux/store';
import '../styles/nav.css';


class AdminNavBar extends React.Component {
    signout = () => {
        // console.log('signOut')
        if(localStorage.getItem('token')){
        store.dispatch({
            type: 'SIGN_OUT',
          value: ''
        });
        if(localStorage.getItem('token')){
        localStorage.clear();
        }
        this.props.history.push('../user/signin')
    }
    }
    render(){
        return (
            <Navbar bg="dark" variant="dark" expand="md" className='main-nav'> 
                <Link id='brand' to="/admin/searchpeople" className='mr-auto'>REDSHIFT</Link>
                <Link className='nav-item' to="/admin/searchpeople">HOME</Link>
                <Link className='nav-item' to="/admin/adduser">ADD USER</Link>
                <Link className='nav-item' to="/admin/users">VIEW USERS</Link>
                <Link className='nav-item' onClick={this.signout}>SIGN OUT</Link>
            </Navbar>
        )
    }
}

export default AdminNavBar;