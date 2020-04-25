import React from 'react';
import Logo from './Logo.js';
import Nav from './Nav.js';

function Header() {
  return (
    <header className="header">
      <div className="header-row row">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}

export default Header;
