import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';

class AdminNavBar extends React.Component {

    render(){
        return (
            <Navbar bg="dark" variant="dark" expand="md" className='main-nav'>
                <Navbar.Brand href="/admin/home">REDSHIFT</Navbar.Brand>
                <Navbar.Toggle aria-controls="collapse"/>
                    <Navbar.Collapse id="collapse">
                        <Nav className='ml-auto'>
                            <Nav.Link href="admin/home">HOME</Nav.Link>
                            <Nav.Link href="admin/adduser">ADD USER</Nav.Link>
                            <Nav.Link href="admin/help">HELP</Nav.Link>
                            <Nav.Link href="admin/login">SIGN OUT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default AdminNavBar;