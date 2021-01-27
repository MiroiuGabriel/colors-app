import ButtonSidebar from './ButtonSidebar';
import namer from 'color-namer';
import clsx from 'clsx';
import { IoMdAdd as AddButton } from 'react-icons/io';
import './css/card.css';

const Card = ({ card, lockCard, removeCard, length, displayNotification, addColor }) => {
	const showLast = clsx('sidebar', card.isLocked && 'show-last');
	let namedColor = namer(card.color, { pick: ['pantone'] });
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
			<div className="add-button-trigger">
				<div className="add-button tooltip" onClick={() => addColor(card.id)}>
					<AddButton />
					<span className="tooltiptext">Add colors</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
