import { useEffect, useRef } from 'react';
import Card from './Card';
import Footer from './Footer';
import './css/cards.css';

const Cards = ({ cards, shuffleAll, lockCard, removeCard, displayNotification, addColor }) => {
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
			{cards.map((card, index) => (
				<Card
					key={card.id}
					card={card}
					lockCard={lockCard}
					removeCard={removeCard}
					length={cards.length}
					displayNotification={displayNotification}
					addColor={addColor}
					isLast={index === cards.length - 1}
				/>
			))}
			<Footer shuffleAll={shuffleAll} />
		</div>
	);
};

export default Cards;
