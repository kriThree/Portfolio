import { FC } from "react";
import styles from "./navbar.module.scss";
import { animated } from "@react-spring/web";
import { NavLink } from "react-router-dom";
import { screenPaths } from "../../../app";
interface INavbar {
	spring: Object;
	onClick: (b: boolean) => void;
}

const Navbar: FC<INavbar> = ({ spring, onClick }) => {
	const navPaths: {
		text: string;
		path: string;
	}[] = [
		{
			text: "Информация",
			path: screenPaths.info,
		},
		{
			text: "Контакты",
			path: screenPaths.contacts,
		},
		{
			text: "Проекты",
			path: screenPaths.projects,
		},
		{
			text: "Цены",
			path: screenPaths.rates,
		},
	];

	return (
		<>
			<animated.nav className={styles.navbar} style={spring}>
				{navPaths.map((path) => (
					<div className={styles.link}>
						<NavLink
							to={path.path}
							className={({ isActive }) => (isActive ? styles.active : "")}
							onClick={() => onClick(false)}
						>
							{path.text}
						</NavLink>
					</div>
				))}
			</animated.nav>
		</>
	);
};

export { Navbar };
