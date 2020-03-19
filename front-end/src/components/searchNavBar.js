import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../styles/nav.css';
import { connect } from 'react-redux';

class SearchNavBar extends React.Component {

    render(){
        return ( 
            <div>
            {!this.props.admin ? 
                    <Navbar bg="dark" variant="dark" expand="md" id='search-nav'> 
                    <Link className='search-nav-item' to="/user/home/searchpeople">Search People</Link>
                    <Link className='search-nav-item' to="/user/home/searchvehicle">Search Vehicles</Link>
                    <Link className='search-nav-item' to="/user/home/searchlocation">Search Location</Link>
                    </Navbar> 
                    :

                    <Navbar bg="dark" variant="dark" expand="md" id='search-nav'> 
                        <Link className='search-nav-item' to="/admin/searchpeople">Search People</Link>
                        <Link className='search-nav-item' to="/admin/searchvehicle">Search Vehicles</Link>
                        <Link className='search-nav-item' to="/admin/searchlocation">Search Location</Link>
                        </Navbar> 

            }
             </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.signin.isAdmin)
    return {
        admin: state.signin.isAdmin
    }
}

export default connect(mapStateToProps)(SearchNavBar);