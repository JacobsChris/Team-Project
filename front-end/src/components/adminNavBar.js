import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import store from '../redux/store';


class AdminNavBar extends React.Component {
    signout = () => {
        // console.log('signOut')
        store.dispatch({
            type: 'SIGN_OUT',
          value: ''
        });
        localStorage.clear();
        this.props.history.push('../user/signin')
    }
    render(){
        return (
            <Navbar bg="dark" variant="dark" expand="md" className='main-nav'> 
                <Link to="/admin/home">REDSHIFT</Link>
                <Link to="/admin/home">HOME</Link>
                <Link to="/admin/adduser">ADD USER</Link>
                <Link to="/admin/users">VIEW USERS</Link>
                {/* <Link to="/admin/changepassword">CHANGE PASSWORD</Link> */}
                <Link to="/admin/help">HELP</Link>
                <Link onClick={this.signout}>SIGN OUT</Link>
            </Navbar>
        )
    }
}

export default AdminNavBar;