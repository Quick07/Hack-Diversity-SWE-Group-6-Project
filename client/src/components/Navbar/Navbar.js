import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
        <div class='sidenav'>
          <Link to='/'>Advanced X-Ray</Link>
          <Link to='/IndexPage'>index</Link> {/* Links to Index Page */}
          <Link to='/AdminPage'>admin</Link> {/* Links to Admin Page */}
        </div>
    );
  }
}

export default Navbar;
