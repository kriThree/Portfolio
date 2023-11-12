import { FC, } from "react";
import styles from "./miniIcon.module.scss";
import { animated } from "@react-spring/web";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MountPart } from "../LayoutIcons";
export interface IMiniIcon {
	part: MountPart;
	hover: boolean;
	animation: Object;
}

const MiniIcon: FC<IMiniIcon> = ({ part, animation }) => {
	return (
		<animated.div
			className={`${styles.part}`}
			style={{ x: part.coordinates.x, y: part.coordinates.y, ...animation }}
		>
			<FontAwesomeIcon icon={part.part} />
		</animated.div>
	);
};

export { MiniIcon };
