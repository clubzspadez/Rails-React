import React from 'react';
import { NavLink } from 'react-router-dom';


export default function NavBar() {
  return (
        <nav className="navbar fixed-top">
            <NavLink to="/" activeClassName="selected" className="nav-link"><h3>Home</h3></NavLink>
            <NavLink to="/articles"> <h3>Articles</h3> </NavLink>
            <NavLink to="/articles/new" activeClassName="selected" className="nav-link"><h3>Create</h3></NavLink>
            
        </nav>

  )
}
