import React from 'react';

import Button from '../components/Button';

const Hero = ()=> (
	<div className="hero">
		<div className="hero-row row">
			<div className="hero-content">
				<h1 className="hero-title">Fim de semana gratuito do <span>Assassin's Creed® Odyssey!</span></h1>
				<p className="hero-description">Leia essas dicas da Mentors Guild para aproveitar ao máximo o seu fim de semana gratuito do Assassin's Creed® Odyssey (19 a 22 de março)!</p>
				<Button to="/about" text="Saiba Mais"/>
			</div>
		</div>
	</div>
);

export default Hero;