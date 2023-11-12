import { SpringRef, SpringValues, useSpring } from "@react-spring/web";
import { useState, useEffect } from "react";

const useRandomParts = (
	config: {
		time: number;
		maxTranslateTime: number;
		minTranslateTime: number;
	} = { time: 2000, maxTranslateTime: 4000, minTranslateTime: 2000 }
): [SpringValues<ElementParams>, SpringRef<ElementParams>] => {
	const [params, setParams] = useState<{
		thisCoordinates: ElementParams;
		translation: ElementParams;
		duration: number;
	}>({
		thisCoordinates: {
			transform: `rotate(0deg)`,
			top: `${getRandomInt(10, 90)}%`,
			left: `${getRandomInt(10, 90)}%`,
		},
		translation: {
			transform: `rotate(0deg)`,
            top: `${getRandomInt(10, 90)}%`,
			left: `${getRandomInt(10, 90)}%`,
		},
		duration: 1,
	});

	const [springs, api] = useSpring(() => ({
		from: params.thisCoordinates,
	}));

	const setRandomParams = () => {
		setParams({
			duration: getRandomInt(config.minTranslateTime, config.maxTranslateTime),
			translation: {
				transform: ` rotate(${getRandomInt(0, 400)}deg)`,
				top: `${getRandomInt(10, 90)}%`,
				left: `${getRandomInt(10, 90)}%`,
			},
			thisCoordinates: { ...params.translation },
		});
	};

	useEffect(() => {
		setRandomParams();
	}, []);
	useEffect(() => {
		api.start({
			from: params.thisCoordinates,
			to: params.translation,
			config: {
				duration: params.duration,
			},
			onRest: () => {
				setRandomParams();
			},
		});
	}, [params]);

	return [springs, api];
};

interface ElementParams {
	top: string;
	left: string;
	transform: string;
}
const getRandomInt = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min)) + min;
};
export { useRandomParts };
