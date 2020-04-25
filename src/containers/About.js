import React, { Component } from 'react';

import Button from '../components/Button';

class About extends Component {
  render() {
    return (
      <>
	      <h1 className="about-title">About</h1>
	      <Button to="/" text="Home"/>
    	</>
    );
  }
}

export default About;
