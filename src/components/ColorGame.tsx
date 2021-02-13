import { useState, useEffect } from 'react';
import { getRandomColor } from './functions/generateRandomColor';
import Cards from './Cards';
import clsx from 'clsx';
import { CardType } from './Types/Types';
import './css/colorgame.css';

const initalCards: CardType[] = [
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

let waitForShuffle = false;
const savedCards: CardType[] | null = JSON.parse(window.localStorage.getItem('Cards') || 'null');

const ColorGame = () => {
	const [cards, setCards] = useState(savedCards || initalCards);
	const [showNotification, setShowNotification] = useState(false);
	useEffect(() => {
		window.localStorage.setItem('Cards', JSON.stringify(cards));
	}, [cards]);

	const shuffleAll = () => {
		if (!waitForShuffle) {
			setCards(
				cards.map(card => {
					if (card.isLocked) {
						return card;
					}
					return { ...card, color: getRandomColor() };
				})
			);
			waitForShuffle = true;
			setTimeout(() => (waitForShuffle = false), 100);
		}
	};
	const lockCard = (id: number) => {
		setCards(cards.map(card => (card.id === id ? { ...card, isLocked: !card.isLocked } : card)));
	};
	const removeCard = (id: number) => {
		setCards(cards.filter(card => card.id !== id));
	};
	const displayNotification = () => {
		if (!showNotification) {
			setShowNotification(true);
			setTimeout(() => setShowNotification(false), 2000);
		}
	};
	const addColor = (id: number) => {
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
