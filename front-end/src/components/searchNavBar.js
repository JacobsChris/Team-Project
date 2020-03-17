import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../styles/nav.css';

class SearchNavBar extends React.Component {

    render(){
        return (
            <Navbar bg="dark" variant="dark" expand="md" id='search-nav'> 
                <Link className='search-nav-item' to="/user/home/searchpeople">Search People</Link>
                <Link className='search-nav-item' to="/user/home/searchvehicle">Search Vehicles</Link>
                <Link className='search-nav-item' to="/user/home/searchlocation">Search Location</Link>
            </Navbar>
        )
    }
}

export default SearchNavBar;