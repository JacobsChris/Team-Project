import React from 'react';
import { getUsers } from '../redux/actions/getUserAction';
import { setUsername } from '../redux/actions/setUsernameAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import '../styles/user.css';

class Users extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userDetails: []
        }
    }

    componentDidMount(){
        this.props.getUsers();
        console.log('component')
    }
    
    handleClick = (e) => {
        // event.preventDefault();
        e.preventDefault();
        console.log(e.target.name);
        this.props.history.push('./changepassword')

        this.props.setUsername(e.target.name);
    }

    render() {
        console.log('prop')
        console.log(this.props.users)
        return (
            <div id='user-cards'> 
                {this.props.users?.map(user =>(
                    <Card>
                    <Card.Title id='username'>{user.username}</Card.Title>
                    <Button variant='dark' id='password-button' name={user.username} onClick={this.handleClick} type='submit'>Change Password</Button>
                    </Card>
                ))}
       
            </div>
        )
    }
}

Users.propTypes = {
    getUsers: PropTypes.func.isRequired,
    setUsername: PropTypes.func.isRequired
  };


function mapStateToProps(state) {
    console.log(state.allUsers.results[0])
    return {
        users: state.allUsers.results[0]
    }
}

export default connect(mapStateToProps, { getUsers, setUsername })(Users);
// export default Users;