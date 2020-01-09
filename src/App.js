import React from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import './App.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav,Form,FormControl,Button,ButtonToolbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
     
  
      <SortingVisualizer></SortingVisualizer>
      
    </div>
  );
}

export default App;