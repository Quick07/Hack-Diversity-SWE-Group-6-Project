// import { Menu, Burger } from './Navbar.jsx';
// import React from 'react';

// const Navbar = () => {
//   const [open, setOpen] = React.useState(false);
//   const node = React.useRef();
//   return (
//     <div ref={node}>
//       <Burger open={open} setOpen={setOpen} />
//       <Menu open={open} setOpen={setOpen} />
//     </div>
//   );
// };

//

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
class Navbar extends Component {
  render() {
    return (
      <div>
        <div className='Sidenav'>
          <Link to='/'>
            <h1>project x</h1>
          </Link>

          <Link to='/Exams' className='navitem'>
            Exams
          </Link>

          <Link to='/Admin' className='navitem'>
            Admin
          </Link>

          <Link to='/About' className='navitem'>
            About
          </Link>
        </div>
      </div>
    );
  }
}
export default Navbar;
