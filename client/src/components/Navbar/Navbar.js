import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <div class='sidenav'>
          <Link to='/'>Home</Link>
          <Link to='/AdminPage'>Admin</Link>
          <Link to='/AboutPage'>About</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
