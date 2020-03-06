import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';

class NavBar extends React.Component {

    render(){
        return (
            <Navbar bg="dark" variant="dark" expand="md" className='main-nav'>
                <Nav.Link id='brand' className='mr-auto' href="/user/home">REDSHIFT</Nav.Link>
                <Navbar.Toggle aria-controls="collapse"/>
                    <Navbar.Collapse id="collapse">
                        <Nav className='ml-auto'>
                            <Nav.Link href="/user/home">HOME</Nav.Link>
                            <Nav.Link href="/user/help">HELP</Nav.Link>
                            <Nav.Link href="/user/login">SIGN OUT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;

