import { FC } from "react";
import { ReactNode } from "react-markdown/lib/ast-to-react";
import {Header} from "../header/Header";
import styles from "./layout.module.scss";

interface ILayout {
	children: ReactNode;
	
}

const Layout: FC<ILayout> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Header />

			{children}
		</div>
	);
};

export { Layout };
