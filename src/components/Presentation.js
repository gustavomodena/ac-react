import React from 'react';

const Presentation = ()=> (
	<div className="presentation row">
    <div className="presentation-container">
			<div className="presentation-content">
				<h3 className="presentation-title">Jogue através da história, em uma <span>série premiada de jogos.</span></h3>
				<p className="presentation-description">Da Antiga Roma até as revoluções americana e francesa, como piratas caribenhos durões ou como membros de gangue na Londres da Revolução Industrial. Assassin's Creed faz você mergulhar na memória de seus antepassados, lutando pelo bem nos momentos mais fascinantes e fundamentais da história humana. Novo na franquia? Role para baixo para ver os destaques de cada jogo ou simplesmente selecione seu console e veja quais títulos se encaixam em seu estilo de jogo...</p>
			</div>

			<div className="presentation-view">
				<img className="presentation-image" src={require('../images/presentation/rogue.webp')} alt="" />
			</div>
    </div>
  </div>
);

export default Presentation;