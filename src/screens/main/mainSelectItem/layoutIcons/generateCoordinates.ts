export interface Coordinates {
	x: number;
	y: number;
}

export const generate = (): Coordinates => {
	const x = Math.round(
		(Math.random() > 0.5 ? -1 : 1) * (50 + Math.random() * 50)
	);
	const y = Math.round(
		(Math.random() > 0.5 ? -1 : 1) * (50 + Math.random() * 50)
	);
	return { x, y };
};
export const generatingCoordinates = (stack: Coordinates[]): Coordinates => {
	for (let g = 0; g < 20; g++) {
		const { x, y } = generate();

		if (!stack.some((e) => Math.abs(e.x - x) < 20 || Math.abs(e.y - y) < 20)) {
			stack.push({ x, y });
			return { x, y };
		}
	}
	return { x: NaN, y: NaN };
};
