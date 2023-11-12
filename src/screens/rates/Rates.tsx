import { FC } from "react";
import styles from "./rates.module.scss";
import { RateItem } from "./rateItem/RateItem";

const Rates: FC = () => {
	return (
		<div className={styles.container}>
			<ul className={styles.rates}>
				<RateItem level={1} name="Тильда" price={10000} />
				<RateItem level={2} name="Лендинг" price={20000} />
				<RateItem level={3} name="Магазин" price={40000} />
				<RateItem level={4} name="Приложение" price={60000} />
			</ul>
			<ul className={styles.technologies}></ul>
		</div>
	);
};

export { Rates };
