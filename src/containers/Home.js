import React, { Component } from 'react';

import Hero from '../components/Hero';
import Presentation from '../components/Presentation';

class Home extends Component {
  render() {
    return (
    	<>
	      <Hero />
	      <Presentation />
    	</>
    );
  }
}

export default Home;
