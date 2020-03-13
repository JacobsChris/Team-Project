import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../styles/nav.css';

class SearchNavBar extends React.Component {

    render(){
        return (
            <Navbar bg="dark" variant="dark" expand="md" className='main-nav'> 
                <Link to="/user/home/searchpeople">Search People</Link>
                <Link to="/user/home/searchvehicle">Search Vehicles</Link>
                <Link to="/user/home/searchlocation">Search Location</Link>
            </Navbar>
        )
    }
}

export default SearchNavBar;