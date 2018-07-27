import React from 'react';
import logo from '../igniter.png';
import search from '../search.png';

const NavBar = () => (
  <div className="">
    <button type="submit" className="navbarOption mr">
      Explore
    </button>

    <a href="google.com" className="navbarOption mr">
      Start a project
    </a>

    <img src={logo} alt="igniter" />

    <button type="submit" className="navbarOption">
      Search
      <img src={search} alt="search" className="searchIcon"/>
    </button>

    <button type="submit" className="navbarOption">
      Sign In
    </button>

    <hr />
  </div>
);

module.exports = NavBar;
