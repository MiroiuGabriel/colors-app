export type CardType = {
	id: number;
	color: string;
	isLocked: boolean;
};

type Props = {
	lockCard: (id: number) => void;
	removeCard: (id: number) => void;
	displayNotification: () => void;
};

export type CardsProps = Props & {
	cards: CardType[];
	shuffleAll: () => void;
	addColor: (id: number) => void;
};

export type CardProps = Props & {
	card: CardType;
	isLast: boolean;
	length: number;
	addColor: (id: number) => void;
};

export type ButtonSideBarProps = Props & {
	length: number;
	card: CardType;
};
