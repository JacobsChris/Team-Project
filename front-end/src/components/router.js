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
    
    // requireLogin = (to, from, next) => {
    //     console.log(this.state.token)
    //     // debugger;
    //     if (this.props.token) {
    //         console.log('pass');
    //         next();
    //     }
        
    //     next.redirect('/user/signin');
    // }

    render() {
        const requireLogin = (to, from, next) => {
            console.log(this.props.token)
            // debugger;
            if (this.props.token) {
                console.log('pass');
                next();
            }
            
            next.redirect('/user/signin');
        }
        console.log(this.props.admin)
        const isAdmin = (to, from, next) => {
            console.log(this.props.admin)
            if(this.props.admin){
                next();
            }
            console.log('redirect')
            next.redirect('/user/signin');
        }

        return (
            // <Provider store={store}>
            <BrowserRouter>
                <Route path='/user/' component={NavBar}></Route>
                <GuardProvider guards={[requireLogin]}>
                    <GuardedRoute path='/user/home/' component={SearchNavBar} />
                    <GuardedRoute path='/user/home/searchpeople' component={SearchPeople} />
                    <GuardedRoute path='/user/home/searchvehicle' component={SearchVehicle} />
                        <GuardProvider guards={[isAdmin]}>
                            <GuardedRoute path='/admin/' component={AdminNavBar} />
                            <GuardedRoute path='/admin/adduser' component={CreateUser} />
                            <GuardedRoute path='/admin/changepassword' component={ChangePassword} />
                        </GuardProvider>
                    <GuardedRoute path='/user/home/peopleresults' component={PeopleResultsPage} />
                    <GuardedRoute path='/user/home/vehicleresults' component={VehicleResultsPage} />
                </GuardProvider>
                <Route path='/user/signin' component={SignIn}></Route>
            </BrowserRouter>
            // </Provider>
        );
    }
}

function mapStateToProps(state) {

    return {
        admin: state.signin.isAdmin,
        token: state.signin.token
    }
}

// App.propTypes = {
//   signIn: PropTypes.func.isRequired
// };



export default connect(mapStateToProps)(Router);
