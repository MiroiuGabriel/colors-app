import ButtonSidebar from './ButtonSidebar';
import namer from 'color-namer';
import clsx from 'clsx';
import { IoMdAdd as AddButton } from 'react-icons/io';
import './css/card.css';

const Card = ({ card, lockCard, removeCard, length, displayNotification, addColor, isLast }) => {
	const showLast = clsx('sidebar', card.isLocked && 'show-last');
	const namedColor = namer(card.color, { pick: ['pantone'] });
	const addButtonClasses = clsx('add-button-trigger', isLast && 'hide-div');
	return (
		<div style={{ backgroundColor: card.color }} className="card-container">
			<div className={showLast}>
				<ButtonSidebar
					card={card}
					lockCard={lockCard}
					removeCard={removeCard}
					length={length}
					displayNotification={displayNotification}
				/>
			</div>
			<h1 className="hex">{card.color.slice(1, card.color.length)}</h1>
			<h2 className="hex-name">{namedColor.pantone[0].name}</h2>
			<div className={addButtonClasses}>
				{length < 9 && (
					<div className="add-button tooltip" onClick={() => addColor(card.id)}>
						<AddButton />
						<span className="tooltiptext">Add colors</span>
					</div>
				)}
			</div>
		</div>
	);
};

export default Card;
