import { CgRemove as RemoveIcon } from 'react-icons/cg';
import { FiCopy as Copy } from 'react-icons/fi';
import { FaLock as Locked } from 'react-icons/fa';
import { FaUnlock as Unlocked } from 'react-icons/fa';
import clsx from 'clsx';
import './css/buttonsidebar.css';
import { useEffect } from 'react';

const ButtonSidebar = ({ card, lockCard, removeCard, length, displayNotification }) => {
	useEffect(() => {
		const queryOpts = { name: 'clipboard-write', allowWithoutGesture: false };
		navigator.permissions.query(queryOpts);
	}, []);

	const hideDiv = clsx('button tooltip mobile', length === 2 && 'hide-div');
	const isLocked = clsx('button tooltip ', card.isLocked && 'highlight');
	return (
		<div className="main-buttons-container">
			<div className={hideDiv} onClick={() => removeCard(card.id)}>
				<RemoveIcon />
				<span className="tooltiptext">Remove color</span>
			</div>
			<div
				className="button tooltip"
				onClick={async () => {
					if (navigator.clipboard) {
						await navigator.clipboard.writeText(card.color);
						displayNotification();
					} else {
						await navigator.permissions.request('clipboard-write');
					}
				}}
			>
				<Copy />
				<span className="tooltiptext">Copy HEX</span>
			</div>
			<div className={isLocked} onClick={() => lockCard(card.id)}>
				{card.isLocked ? <Locked /> : <Unlocked />}
				<span className="tooltiptext">Toggle lock</span>
			</div>
		</div>
	);
};

export default ButtonSidebar;