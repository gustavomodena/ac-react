import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({text, to})=> {
	return (
		<Link className="button button-primary" to={to}>{text}</Link>
	);
}

export default Button;