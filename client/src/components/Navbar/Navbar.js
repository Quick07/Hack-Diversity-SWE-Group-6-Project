import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className='navWrapper'>
        <div class='sidenav'>
          <Link  to='/' style={{"padding-top": "25px"}}>Advanced X-Ray</Link>
          <Link to='/IndexPage'>Index</Link> {/* Links to Index Page */}
          <Link to='/AdminPage'>Admin</Link> {/* Links to Admin Page */}
        </div>
        </div>
    );
  }
}

export default Navbar;
