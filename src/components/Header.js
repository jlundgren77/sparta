import React from 'react';

import logo from '../images/logo.png';
import hamburger from '../images/hamburger.png';

const Header = () => (
  <header>
    <div className="header-left">
      <img className="logo" src={logo} alt="logo" />
    </div>
    <div className="header-right">
      <p>212.555.5555</p>
      <a href="/">Login</a>
      <nav>
        <img src={hamburger} alt="navigation" />
      </nav>
    </div>
  </header>
);
export default Header;
