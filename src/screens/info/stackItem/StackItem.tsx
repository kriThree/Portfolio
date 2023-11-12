import { FC, useState} from "react";
import { useSpring, animated } from "@react-spring/web";
import styles from "./stackItem.module.scss";
import { GroupTechnologies } from "../Info";

interface IStackItem {
	groupTechnologies: GroupTechnologies;
}

const StackItem: FC<IStackItem> = ({ groupTechnologies }) => {
	const [active, setActive] = useState(false);
	const [hoverSprings, hoverApi] = useSpring(() => ({
		from: {
			opacity: 0,
			scale: 1,
		},
	}));
	const hoverHandler = () => {
		hoverApi.start({
			from: {
				opacity: 0,
				scale: 1,
			},
			to: {
				opacity: 1,
				scale: 1.4,
			},
			reverse: active,
		});
	};

	return (
		<li
			className={styles.group}
			onPointerEnter={() => {
				setActive(true);
				hoverHandler();
			}}
			onPointerLeave={() => {
				setActive(false);
				hoverHandler();
			}}
		>
			<animated.div
				className={styles.image}
				style={{ scale: hoverSprings.scale }}
			>
				<img src={groupTechnologies.image} alt="technology" />
			</animated.div>
			<animated.div
				className={styles.text}
				style={{ opacity: hoverSprings.opacity }}
			>
				<div className={styles.name}>{groupTechnologies.name}:&nbsp;</div>
				<ul className={styles.technologies}>
					{groupTechnologies.technologies.map((technologyItem) => (
						<li className={styles.technology}>{technologyItem}&nbsp;</li>
					))}
				</ul>
			</animated.div>
		</li>
	);
};

export { StackItem };
