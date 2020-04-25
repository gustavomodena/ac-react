import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-row row">
        <img className="logo" src={require('../images/logo.webp')} alt=""/>

        <nav className="nav">
					<ul className="nav-list">
						<li className="nav-item">
							<NavLink className="nav-link" to="/">Home</NavLink>
						</li>
						
						<li className="nav-item">
							<NavLink className="nav-link" to="/about">Sobre</NavLink>
						</li>

						<li className="nav-item">
							<NavLink className="nav-link" to="#">Jogos</NavLink>
						</li>

						<li className="nav-item">
							<NavLink className="nav-link" to="#">Assassinos</NavLink>
						</li>

						<li className="nav-item">
							<NavLink className="nav-link" to="#">Notícias</NavLink>
						</li>
					</ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
