import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../styles/nav.css';

class SearchNavBar extends React.Component {

    render(){
        return (
            <Navbar bg="dark" variant="dark" expand="md" className='main-nav'> 
                <Link to="./searchpeople">Search People</Link>
                <Link to="./searchvehicle">Search Vehicles</Link>
                <Link to="./searchlocation">Search Location</Link>
            </Navbar>
        )
    }
}

export default SearchNavBar;