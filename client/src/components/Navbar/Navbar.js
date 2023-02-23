import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <div class='sidenav'>
          <Link to='/'>Advanced X-Ray</Link>
          <Link to='/ExamPage'>Exams</Link>
          <Link to='/AdminPage'>Admin</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
