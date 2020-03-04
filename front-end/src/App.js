import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={NavBar}></Route>
    </BrowserRouter>
  );
}

export default App;
