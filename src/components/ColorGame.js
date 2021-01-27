import { useState, useEffect } from 'react';
import { getRandomColor } from './functions/generateRandomColor';
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

const savedCards = JSON.parse(window.localStorage.getItem('Cards'));

const ColorGame = () => {
	const [cards, setCards] = useState(savedCards || initalCards);
	const [showNotification, setShowNotification] = useState(false);
	useEffect(() => {
		window.localStorage.setItem('Cards', JSON.stringify(cards));
	}, [cards]);

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
		setShowNotification(true);
		setTimeout(() => setShowNotification(false), 2000);
	};
	const addColor = id => {
		if (cards.length < 10) {
			let newCards = [...cards];
			newCards.splice(id, 0, { id: Math.floor(Math.random() * 1000), color: getRandomColor(), isLocked: false });
			setCards(newCards);
		}
	};
	const notification = clsx('notification', showNotification && 'show-notification');
	return (
		<div className="color-game-container">
			<Cards
				cards={cards}
				shuffleAll={shuffleAll}
				lockCard={lockCard}
				removeCard={removeCard}
				displayNotification={displayNotification}
				addColor={addColor}
			/>
			<div className={notification}>Color copied to the clipboard</div>
		</div>
	);
};

export default ColorGame;
