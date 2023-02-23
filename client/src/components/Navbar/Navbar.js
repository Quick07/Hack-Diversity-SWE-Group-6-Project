import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className='navWrapper'>
        <div class='sidenav'>
          <Link to='/' style={{ 'padding-top': '25px' }}>
            Advanced X-Ray
          </Link>
          <Link to='/MainExamPage'>Exams</Link>
          <Link to='/AdminPage'>Admin</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
