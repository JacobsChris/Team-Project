import React, { useState } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import SearchPeople from './components/SearchPeople';
import NavBar from './components/navBar';
import AdminNavBar from './components/adminNavBar';
import SearchNavBar from './components/searchNavBar';
import PeopleResultsPage from './components/peopleResultsPage';
import SignIn from './components/SignIn';
import store from './js/store';

function App() {
  const [auth, setAuth] = useState(false);

  store.subscribe
  console.log(store.getState().token.length)
  if(store.getState().token.length){
    setAuth(true);
  }
  return (
    <BrowserRouter>
      {/* <Switch> */}
      <Route path='/user/' component={NavBar}></Route>
      {!store.getState().token ?
      <Route path='/user/home/' component={SearchNavBar}></Route> : null}
      <Route path='/user/home/searchpeople' component={SearchPeople}></Route>
      <Route path='/admin/' component={AdminNavBar}></Route>
      <Route path='/user/home/peopleresults' component={PeopleResultsPage}></Route>
      <Route path='/user/home/signin' component={SignIn}></Route>
      
      {/* </Switch> */}
    </BrowserRouter>
  );
}

export default App;
