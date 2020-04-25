import React from 'react';
import Logo from './Logo.js';
import Nav from './Nav.js';

function Header() {
  return (
    <header className="header">
      <div className="header-row row">
        <Logo />
        
        <div className="hamburger">
					<span className="hamburger-line"></span>
					<span className="hamburger-line"></span>
					<span className="hamburger-line"></span>
        </div>

        <Nav />
      </div>
    </header>
  );
}

export default Header;
