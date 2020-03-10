import React, { useState } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import SearchPeople from './components/SearchPeople';
import NavBar from './components/navBar';
import AdminNavBar from './components/adminNavBar';
import SearchNavBar from './components/searchNavBar';
import PeopleResultsPage from './components/peopleResultsPage';
import SignIn from './components/SignIn';
import { connect } from 'react-redux';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import CreateUser from './components/createUser';


function App() {

  const requireLogin = (to, from, next) => {
    if (sessionStorage.getItem('jwt')) {
      next();
    }
    next.redirect('/user/home/signin');
  };

  return (
    <BrowserRouter>
      <Route path='/user/' component={NavBar}></Route>
        <GuardProvider guards={[requireLogin]}>
          <GuardedRoute path='/user/home/' component={SearchNavBar}></GuardedRoute>
          <GuardedRoute path='/user/home/searchpeople' component={SearchPeople}></GuardedRoute>
          <GuardedRoute path='/admin/' component={AdminNavBar}></GuardedRoute>
          <Route path='/admin/adduser/' component={CreateUser}></Route>
          <GuardedRoute path='/user/home/peopleresults' component={PeopleResultsPage}></GuardedRoute>
        </GuardProvider>
      <Route path='/user/home/signin' component={SignIn}></Route>
    </BrowserRouter>
  );
}


export default connect ()(App);
