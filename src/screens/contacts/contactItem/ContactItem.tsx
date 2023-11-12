import { FC, useEffect, Dispatch } from "react";
import styles from "./contactItem.module.scss";
import { Contact } from "../Contacts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animated, useSpring } from "@react-spring/web";
import { useRandomParts } from "../../../hooks/useRandomParts";
interface IContactItem {
	contact: Contact;
	activeIndex: null | number;
	setActiveIndex: Dispatch<null | number>;
	index: number;
}

const ContactItem: FC<IContactItem> = ({
	contact,
	activeIndex,
	setActiveIndex,
	index,
}) => {
	const isActive = activeIndex === index;
	const [partSprings, partApi] = useRandomParts();
	const [stopSprings, stopApi] = useSpring(() => ({
		from: {
			transform: `rotate(0deg) scale(1)`,
		},
	}));
	const [descriptionSprings, descriptionApi] = useSpring(() => ({
		from: {
			transform: "scale(0)",
			opacity: 0,
		},
	}));
	const mountSprings = useSpring({
		from: {
			opacity: 0,
		},
		to: {
			opacity: 1,
		},
		config : {
			 duration : 3000,
		}
	});
	const stopParams = {
		from: {
			transform: `rotate(0deg) scale(1)`,
		},
		to: {
			transform: `rotate(720deg) scale(1.5)`,
		},
	};
	const descriprtionParams = {
		from: {
			transform: "scale(0)",
			opacity: 0,
		},
		to: {
			transform: "scale(1)",
			opacity: 1,
		},
	};
	useEffect(() => {
		if (activeIndex !== null) {
			partApi.pause();
		} else {
			partApi.resume();
		}
	}, [activeIndex]);

	return (
		<>
			<animated.div
				className={styles.contact}
				style={{...mountSprings, ...partSprings, ...(isActive ? stopSprings : {}) }}
				onPointerEnter={() => {
					if (activeIndex === null) {
						console.log("e");
						setActiveIndex(index);

						stopApi.start({
							...stopParams,
						});
						descriptionApi.start({ ...descriprtionParams });
					}
				}}
				onPointerLeave={() => {
					descriptionApi.start({ ...descriprtionParams, reverse: true });
					setActiveIndex(null);
					stopApi.start({
						...stopParams,
						reverse: true,
					});
				}}
			>
				<a href={contact.link}>
					<FontAwesomeIcon
						icon={contact.icon}
						className={styles.contact__icon}
					/>
				</a>
			</animated.div>
			<animated.div className={styles.description} style={descriptionSprings}>
				{contact.description}
			</animated.div>
		</>
	);
};

export { ContactItem };
