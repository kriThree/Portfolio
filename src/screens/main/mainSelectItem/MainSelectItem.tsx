import { FC, useEffect, useState } from "react";
import styles from "./mainSelectItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Spring, animated, useSpring } from "@react-spring/web";
import { Link } from "react-router-dom";
import { screenPaths } from "../../../app";
import { LayoutIcons } from "./layoutIcons/LayoutIcons";

interface IMainSelectItem {
	icon: IconProp;
	text: string;
	animatedParts: IconProp[];
}

const MainSelectItem: FC<IMainSelectItem> = ({ icon, text, animatedParts }) => {
	const [hover, setHover] = useState(false);
	const [springs, api] = useSpring(
		() => ({
			config: { duration: 400 },
			from: { transform: "scale(0)" },
			to: { transform: "scale(1.5)" },
		}),
		[hover]
	);

	useEffect(() => {
		api.start({
			reverse: !hover,
		});
	}, [hover]);
	return (
		<Link
			to={screenPaths.projects}
			className={styles.role}
			onPointerEnter={() => {
				setHover(true);
			}}
			onPointerLeave={() => setHover(false)}
		>
			<div className={styles.role__image_cont}>
				<LayoutIcons parts={animatedParts} hover={hover} animation={springs}>
					<FontAwesomeIcon icon={icon} className={styles.role__image} />
				</LayoutIcons>
			</div>
			<Spring
				reverse={!hover}
				config={{ duration: 200 }}
				from={{ transform: "scale(1)" }}
				to={{ transform: "scale(1.1)" }}
			>
				{(props) => (
					<animated.div className={styles.role__text} style={props}>
						{text}
					</animated.div>
				)}
			</Spring>
		</Link>
	);
};
{
}

export default MainSelectItem;
