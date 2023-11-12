import { FC } from "react";
import styles from "./main.module.scss";
import {
	faBug,
	faCity,
	faDesktop,
	faHandshake,
	faLemon,
	faMobileAndroid,
	faMoneyBillTrendUp,
	faMoneyBillWaveAlt,
	faPersonRays,
} from "@fortawesome/free-solid-svg-icons";
import MainSelectItem from "./mainSelectItem/MainSelectItem";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

const Main: FC = () => {
	console.log(navigator.userAgent);

	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.title}>Мое небольшое портфолио </h1>
				{navigator.userAgent.match(/(iPhone|Android|blackberry|webos)/g) ? (
					<h2 className={styles.alert}>
						Настоятельно рекомендую зайти на этот сайт с ноутбука или компьютера
						так как тут сделано большое количество анимашек под десктопы!
					</h2>
				) : (
					""
				)}
				<ul className={styles.types}>
					<MainSelectItem
						icon={faBug}
						text="Для двачеров с гитхаба"
						animatedParts={[faDesktop, faMobileAndroid, faGithub]}
					/>
					<MainSelectItem
						icon={faPersonRays}
						text="Для важных людей из HH"
						animatedParts={[faLinkedin, faCity, faHandshake]}
					/>
					<MainSelectItem
						icon={faMoneyBillWaveAlt}
						animatedParts={[faMoneyBillTrendUp, faThumbsUp, faLemon]}
						text="Для богачей из фриланса"
					/>
				</ul>
			</div>
		</>
	);
};

export { Main };
