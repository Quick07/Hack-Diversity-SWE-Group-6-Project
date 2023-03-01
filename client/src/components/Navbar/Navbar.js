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
        <div class='sidenav'>
          <Link to='/'>
          <h1>
            project x
            </h1>
            </Link>
          
          
          <Link to='/Exams'className='navitem'><a >Exams</a></Link>
          
          
          <Link to='/Admin' className='navitem'><a>Admin</a></Link>
          
          
          <Link to='/About' className='navitem'><a>About</a></Link>
          
        </div>
      </div>
    );
  }
}
export default Navbar;
