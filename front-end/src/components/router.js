import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';

import SearchPeople from './SearchPeople';
import NavBar from './navBar';
import AdminNavBar from './adminNavBar';
import SearchNavBar from './searchNavBar';
import PeopleResultsPage from './peopleResultsPage';
import SignIn from './SignIn';
import CreateUser from './createUser';
import Users from './users';
import SearchVehicle from './searchVehicle';
import VehicleResultsPage from './vehicleResultsPage';
import ChangePassword from './changePassword';
import PersonLocation from './personLocation';


class Router extends React.Component {
    
    requireLogin = (to, from, next) => {
        const token = localStorage.getItem("token");
        if(localStorage.getItem('token')){
            if (jwtDecode(token).exp < Date.now() / 1000) {
                localStorage.clear();
            }
        }
        if (localStorage.getItem('token')) {
            next();
        }
        next.redirect('/user/signin');
    }

    isAdmin = (to, from, next) => {
            const token = localStorage.getItem("token");
            if(localStorage.getItem('token')){
                if (jwtDecode(token).exp < Date.now() / 1000) {
                    localStorage.clear();
                }
            }
            if(this.props.admin && localStorage.getItem('token')){
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
                    <GuardedRoute path='/user/home/personlocation' component={PersonLocation} />
                </GuardProvider>
                <GuardProvider guards={[this.isAdmin]}>
                    <GuardedRoute path='/admin/' component={AdminNavBar} />
                    <GuardedRoute path='/admin/' component={SearchNavBar} />
                    <GuardedRoute path='/admin/searchpeople' component={SearchPeople} />
                    <GuardedRoute path='/admin/searchvehicle' component={SearchVehicle} /> 
                    <GuardedRoute path='/admin/peopleresults' component={PeopleResultsPage} />
                    <GuardedRoute path='/admin/vehicleresults' component={VehicleResultsPage} />
                    <GuardedRoute path='/admin/adduser' component={CreateUser} />
                    <GuardedRoute path='/admin/users' component={Users} />
                    <GuardedRoute path='/admin/changepassword' component={ChangePassword} />
                    <GuardedRoute path='/admin/personlocation' component={PersonLocation} />
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
