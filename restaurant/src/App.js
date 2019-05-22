import React, { Component } from 'react';
import MenuList from './Contaniers/MenuList/MenuList';


import './App.css';
import {BrowserRouter} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <MenuList />
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;