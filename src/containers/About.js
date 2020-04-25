import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <>
	      <h1 className="page-title">About</h1>
	      <Link to="/">Home</Link>
    	</>
    );
  }
}

export default About;
