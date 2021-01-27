import { useEffect, useState } from 'react';
import { getRandomColor } from './functions/generateRandomColor';
import Navbar from './Navbar';
import Cards from './Cards';
import clsx from 'clsx';
import './css/colorgame.css';

const initalCards = [
	{
		id: 1,
		color: getRandomColor(),
		isLocked: false,
	},
	{
		id: 2,
		color: getRandomColor(),
		isLocked: false,
	},
	{
		id: 3,
		color: getRandomColor(),
		isLocked: false,
	},
	{
		id: 4,
		color: getRandomColor(),
		isLocked: false,
	},
];

const ColorGame = () => {
	const [cards, setCards] = useState(initalCards);
	const [length, setLength] = useState(cards.length);
	const [showNotification, setShowNotification] = useState(false);
	console.log(cards);

	useEffect(() => setLength(cards.length), [cards]);
	const shuffleAll = () => {
		setCards(
			cards.map(card => {
				if (card.isLocked) {
					return card;
				}
				return { ...card, color: getRandomColor() };
			})
		);
	};
	const lockCard = id => {
		setCards(cards.map(card => (card.id === id ? { ...card, isLocked: !card.isLocked } : card)));
	};
	const removeCard = id => {
		setCards(cards.filter(card => card.id !== id));
	};
	const displayNotification = () => {
		//mai am de lucrat(adaugat animatii)
		setShowNotification(true);
		setTimeout(() => setShowNotification(false), 3000);
	};
	const addColor = id => {
		//fac sa isi dea rerender automat
		if (cards.length < 10) {
			let newCards = [...cards];
			newCards.splice(id, 0, { id: ++cards.length, color: getRandomColor(), isLocked: false });
			setCards(newCards);
		}
	};
	const notification = clsx('notification', showNotification && 'show-notification');
	return (
		<div className="color-game-container">
			{/* <Navbar /> */}
			<Cards
				cards={cards}
				shuffleAll={shuffleAll}
				lockCard={lockCard}
				removeCard={removeCard}
				length={length}
				displayNotification={displayNotification}
				addColor={addColor}
			/>
			<div className={notification}>Color copied to the clipboard</div>
		</div>
	);
};

export default ColorGame;
