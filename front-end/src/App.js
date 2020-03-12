import React from 'react';
// import { Route, BrowserRouter, Router } from 'react-router-dom';
import Router from './components/router';
import './App.css';
import SearchPeople from './components/SearchPeople';
import NavBar from './components/navBar';
import AdminNavBar from './components/adminNavBar';
import SearchNavBar from './components/searchNavBar';
import PeopleResultsPage from './components/peopleResultsPage';
import SignIn from './components/SignIn';
import { Provider } from 'react-redux';
import store from './redux/store';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import CreateUser from './components/createUser';
import SearchVehicle from './components/searchVehicle';
import VehicleResultsPage from './components/vehicleResultsPage';
import ChangePassword from './components/changePassword';
import { connect } from 'react-redux';
import { signIn } from './redux/actions/signInAction';
import PropTypes from 'prop-types';



function App() {

 
  

  // console.log(admin);
  // console.log(`Token: ${token}`);
  // // console.log(this.props);
  // const requireLogin = (to, from, next) => {
  //   console.log(token)
  //   if (token) {
  //     next();
  //   }
  //   console.log('2nd')
  //   next.redirect('/user/signin');
  // };

  return (
    <Router />
    // <Provider store={store}>
    //   <BrowserRouter>
    //   <Route path='/user/' component={NavBar}></Route>
    //     <GuardProvider guards={[requireLogin]}>
    //       <GuardedRoute path='/user/home/' component={SearchNavBar} />
    //       <GuardedRoute path='/user/home/searchpeople' component={SearchPeople} />
    //       <GuardedRoute path='/user/home/searchvehicle' component={SearchVehicle} />
    //       <GuardedRoute path='/admin/' component={AdminNavBar} />
    //       <GuardedRoute path='/admin/adduser' component={CreateUser} />
    //       <GuardedRoute path='/admin/changepassword' component={ChangePassword} />
    //       <GuardedRoute path='/user/home/peopleresults' component={PeopleResultsPage} />
    //       <GuardedRoute path='/user/home/vehicleresults' component={VehicleResultsPage} />
    //     </GuardProvider>
    //   <Route path='/user/signin' component={SignIn}></Route>
    // </BrowserRouter>
    // </Provider>
  );
}

// function mapStateToProps(state) {
//   return {
//     admin : state.signin.isAdmin,
//     token : state.signin.token
//   }
// }

// App.propTypes = {
//   signIn: PropTypes.func.isRequired
// };



export default App;
