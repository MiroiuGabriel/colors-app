const colors = new Map();
colors.set(10, 'A');
colors.set(11, 'B');
colors.set(12, 'C');
colors.set(13, 'D');
colors.set(14, 'E');
colors.set(15, 'F');
export const getRandomColor = () => {
	let color = '';
	for (let i = 0; i < 6; i++) {
		let digit = Math.floor(Math.random() * 15);
		if (colors.has(digit)) {
			color += colors.get(digit);
		} else {
			color += digit;
		}
		if (i === 5) {
			let numberCount = 0;
			for (let char of color) {
				if (Number.isInteger(+char)) {
					numberCount++;
				}
			}
			if (numberCount === 6) {
				i = -1;
				color = '';
			}
		}
	}
	return '#' + color;
};
