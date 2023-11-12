import { FC, useMemo } from "react";
import styles from "./rateItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as FaSolidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as FaRegularStar } from "@fortawesome/free-regular-svg-icons";

interface IRateItem {
	level: number;
	price: number;
	name: string;
}
const RateItem: FC<IRateItem> = ({ level, name, price }) => {
	const stars = useMemo(
		() => new Array(4).fill(true).map((_, i) => (i < level ? true : false)),
		[]
	);

	return (
		<div className={styles.rate}>
			<div className={styles.name}>{name}</div>
			<div className={styles.level}>
				{stars.map((star) => (
					<FontAwesomeIcon icon={star ? FaSolidStar : FaRegularStar} />
				))}
			</div>
			<div className={styles.price}>{moneyFormating(price)}</div>
		</div>
	);
};
function moneyFormating(element: number) {
	const arr = Array(
		...((" ".repeat(3 - (String(element).length % 3)) + String(element)).match(
			/.{3}/g
		) || [])
	);
	return arr.join('.');
}
export { RateItem };
