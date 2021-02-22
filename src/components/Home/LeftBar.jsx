import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
class LeftBar extends Component {
  state = {};
  render() {
    return (
      <div className="left-bar">
        <Link to="/" className="df ai-c jc-sa">
          <img src={logo}></img>
          <span className='nav-brand-name'>Movie Hub</span>
        </Link>
        <div>
          <p className="active">Menu</p>
          <div  className='df fd-c'>
            <NavLink className='p-10' exact={true} to='/' activeClassName='active-nav'>
              <span>Home</span>
            </NavLink>
            <NavLink  className='p-10' to='/manage' activeClassName='active-nav'>
              <span>Manage</span>
            </NavLink>
            {/* <NavLink className='p-10' exact={true} to='/search' activeClassName='active-nav'>
              <span>Search</span>
            </NavLink> */}

          </div>
        </div>
      </div>
    );
  }
}

export default LeftBar;
