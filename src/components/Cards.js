import { useEffect, useRef } from 'react';
import Card from './Card';
import Footer from './Footer';
import './css/cards.css';

const Cards = ({ cards, shuffleAll, lockCard, removeCard, length, displayNotification, addColor }) => {
	const divRef = useRef(null);

	useEffect(() => {
		divRef.current.focus();
	}, []);

	return (
		<div
			ref={divRef}
			tabIndex="0"
			className="cards-container"
			onKeyPress={ev => ev.code === 'Space' && shuffleAll()}
		>
			{cards.map(card => (
				<Card
					key={card.id}
					card={card}
					lockCard={lockCard}
					removeCard={removeCard}
					length={length}
					displayNotification={displayNotification}
					addColor={addColor}
				/>
			))}
			<Footer shuffleAll={shuffleAll} />
		</div>
	);
};

export default Cards;
