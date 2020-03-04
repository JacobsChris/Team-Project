import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';

class SearchNavBar extends React.Component {

    render(){
        return (
            <Navbar bg="secondary" variant="dark" expand="md">
                <Navbar.Toggle aria-controls="collapse"/>
                    <Navbar.Collapse id="collapse">
                        <Nav className='mr-auto ml-auto'>
                            <Nav.Link href="/user/home/searchpeople">Search People</Nav.Link>
                            <Nav.Link href="/user/home/searchvehicles">Search Vehicles</Nav.Link>
                            <Nav.Link href="/user/home/searchlocation">Search Location</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default SearchNavBar;