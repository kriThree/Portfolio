import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { screenPaths } from "../../app";

import styles from "./router.module.scss";
import { Contacts, Info, Main, Rates, Projects } from "../../screens";

const Router: FC = () => {
	return (
		<main className={styles.screen}>
			<Routes>
				<Route path={screenPaths.main} element={<Main />} />
				<Route path={screenPaths.projects} element={<Projects />} />
				<Route path={screenPaths.info} element={<Info />} />
				<Route path={screenPaths.rates} element={<Rates />} />
				<Route path={screenPaths.contacts} element={<Contacts />} />
			</Routes>
		</main>
	);
};

export { Router };
