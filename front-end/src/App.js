import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar';
import AdminNavBar from './components/adminNavBar';
import SearchNavBar from './components/searchNavBar';

function App() {
  return (
    <BrowserRouter>
      <Route path='/user/' component={NavBar}></Route>
      <Route path='/user/home/' component={SearchNavBar}></Route>
      <Route path='/admin/' component={AdminNavBar}></Route>
    </BrowserRouter>
  );
}

export default App;
