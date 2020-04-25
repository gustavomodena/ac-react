import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
    	<>
	      <h1 className="page-title">Home</h1>
	      <Link to="/about">About</Link>
    	</>
    );
  }
}

export default Home;
