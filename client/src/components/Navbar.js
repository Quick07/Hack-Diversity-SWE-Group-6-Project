import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <ul class="sidenav">
          <li>
            <a className="active" href="#home">
              Index
            </a>
          </li>
          <li>
            <a href="#admin">Admin</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
