import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ()=> (
	<Link to='/'>
		<img className="logo" src={require('../images/logo.webp')} alt=""/>
	</Link>
);

export default Logo;