import React, { Component } from "react";
import { MenuItems } from './MenuItems';
import './NavBar.css'
class NavBar extends Component {
    render(){
        return(
            <div class="navbar">
                <ul>
                    { MenuItems.map((item, index) => {
                  return (
                    <li key = {index}>
                        <a className={item.cName} href={item.url}>
                        {item.title}
                        </a>
                    </li>
                  )
                  })}
                    
                </ul>
            </div>
        )
    }
}

export default NavBar