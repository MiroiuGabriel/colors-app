export const getRandomColor = () => {
	// return '#' + '0123456789ABCDEF'.split('').sort(() => 0.5 - Math.random()).slice(0, 6).join('')	// one liner

	const colors = '0123456789ABCDEF';
	let color: string = '';
	for (let i = 0; i < 6; i++) {
		color += colors[Math.floor(Math.random() * 16)];
	}
	return '#' + color;
};
