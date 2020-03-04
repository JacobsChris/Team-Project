import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar';
import AdminNavBar from './components/adminNavBar';

function App() {
  return (
    <BrowserRouter>
      <Route path='/user' component={NavBar}></Route>
      <Route path='/adminuser' component={AdminNavBar}></Route>
    </BrowserRouter>
  );
}

export default App;
