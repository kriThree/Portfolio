import { FC, useLayoutEffect, useState } from "react";
import styles from "./header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated} from "@react-spring/web";
import { Navbar } from "./navbar/Navbar";
interface INavbarIcon {
	handler: (bool: boolean) => void;
	active: boolean;
}

const NavbarIcon: FC<INavbarIcon> = ({ handler,}) => {
	const [navbarIconSpring, api] = useSpring(() => ({
		from: {
			transform: "scale(0)",
		},
	}));
	useLayoutEffect(() => {
		api.start({
			transform: "scale(1)",
		});
	}, []);

	const clickHandler = () => {
		api.start({
			transform: "scale(0)",
			onRest: () => {
				handler(true);
			},
		});
	};
	return (
		<>
			<animated.div
				className={styles.burger}
				onClick={() => {
					clickHandler();
				}}
				style={navbarIconSpring}
			>
				<FontAwesomeIcon icon={faBars} style={{ fontSize: "inherit" }} />
			</animated.div>
		</>
	);
};

const Header: FC = () => {
	const [active, setActive] = useState(false);
	const [navbarSpring, navbarApi] = useSpring(() => ({
		from: {
			opacity: 0,
		},
	}));

	const navbarHandler = (bool: boolean) => {
		console.log(bool);

		if (bool) setActive(bool);
		navbarApi.start({
			from: {
				opacity: 0,
			},
			to: {
				opacity: 1,
			},
			onRest: () => {
				if (!bool) setActive(bool);
			},
			reverse: !bool,
		});
	};

	return (
		<>
			<header className={styles.header}>
				{active ? (
					<Navbar spring={navbarSpring} onClick = {navbarHandler}/>
				) : (
					<NavbarIcon handler={navbarHandler} active={active} />
				)}
			</header>
			{active ? (
				<div
					className={styles.back}
					onClick={() => {
						navbarHandler(false);
					}}
				/>
			) : (
				""
			)}
		</>
	);
};

export { Header };
