import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
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
import PersonLocation from './components/personLocation';
import {LocationResults} from "./components/LocationResults";

function App() {

  const requireLogin = (to, from, next) => {
    if (sessionStorage.getItem('jwt')) {
      next();
    }
    next.redirect('/user/signin');
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
      <Route path='/user/' component={NavBar}></Route>
        <GuardProvider guards={[requireLogin]}>
          <GuardedRoute path='/user/home/' component={SearchNavBar} />
          <GuardedRoute path='/user/home/searchpeople' component={SearchPeople} />
          <GuardedRoute path='/user/home/searchvehicle' component={SearchVehicle} />
          <GuardedRoute path='/admin/' component={AdminNavBar} />
          <GuardedRoute path='/admin/adduser' component={CreateUser} />
          <GuardedRoute path='/user/home/peopleresults' component={PeopleResultsPage} />
          <GuardedRoute path='/user/home/personlocation' component={PersonLocation} />
          <GuardedRoute path='/user/home/vehicleresults' component={VehicleResultsPage} />
          <GuardedRoute path='/user/home/locationresults' component={LocationResults}/>
        </GuardProvider>
      <Route path='/user/signin' component={SignIn}></Route>
    </BrowserRouter>
    </Provider>
  );
}


export default App;
