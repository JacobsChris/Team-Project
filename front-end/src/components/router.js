import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
// import './App.css';
import SearchPeople from './SearchPeople';
import NavBar from './navBar';
import AdminNavBar from './adminNavBar';
import SearchNavBar from './searchNavBar';
import PeopleResultsPage from './peopleResultsPage';
import SignIn from './SignIn';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import CreateUser from './createUser';
import Users from './users';
import SearchVehicle from './searchVehicle';
import VehicleResultsPage from './vehicleResultsPage';
import ChangePassword from './changePassword';
import { connect } from 'react-redux';
import { signIn } from '../redux/actions/signInAction';
import PropTypes from 'prop-types';



class Router extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    requireLogin = (to, from, next) => {
        if (this.props.token[0]) {
            next();
        }
        next.redirect('/user/signin');
    }

    isAdmin = (to, from, next) => {
            if(this.props.admin){
                next();
            }
            next.redirect('/user/signin');
        }

    render() {
        return (
            <BrowserRouter>
                <Route path='/user/' component={NavBar}></Route>
                <GuardProvider guards={[this.requireLogin]}>
                    <GuardedRoute path='/user/home/' component={SearchNavBar} />
                    <GuardedRoute path='/user/home/searchpeople' component={SearchPeople} />
                    <GuardedRoute path='/user/home/searchvehicle' component={SearchVehicle} /> 
                    <GuardedRoute path='/user/home/peopleresults' component={PeopleResultsPage} />
                    <GuardedRoute path='/user/home/vehicleresults' component={VehicleResultsPage} />
                </GuardProvider>
                <GuardProvider guards={[this.isAdmin]}>
                    <GuardedRoute path='/admin/' component={AdminNavBar} />
                    <GuardedRoute path='/admin/adduser' component={CreateUser} />
                    <GuardedRoute path='/admin/users' component={Users} />
                    <GuardedRoute path='/admin/changepassword' component={ChangePassword} />
                </GuardProvider>
                <Route path='/user/signin' component={SignIn}></Route>
            </BrowserRouter>
        );
    }
}

function mapStateToProps(state) {
    return {
        admin: state.signin.isAdmin,
        token: state.signin.token
    }
}

export default connect(mapStateToProps)(Router);
