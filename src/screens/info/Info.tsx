import { FC } from "react";
import { useSpring, animated } from "@react-spring/web";

import styles from "./info.module.scss";
import { StackItem } from "./stackItem/StackItem";
import { images } from "./images";
export interface GroupTechnologies {
	name: string;
	technologies: string[];
	image: string;
}

const Info: FC = () => {
	const mountSpring = useSpring({
		from: {
			opacity: 0,
		},
		to: {
			opacity: 1,
		},
		config: {
			duration: 1000,
		},
	});

	const technologies: GroupTechnologies[] = [
		{
			name: "Основа приложения",
			technologies: ["HTML", "REACT"],
			image: images.frame,
		},
		{
			name: "Стилизация",
			technologies: ["CSS", "SCSS", "LESS", "MaterialUi"],
			image: images.design,
		},
		{
			name: "ЯП",
			technologies: ["JS", "TS", "Python"],
			image: images.language,
		},
		{
			name: "State-managmanet",
			technologies: ["Redux", "Redux-toolkit"],
			image: images.redux,
		},
		{
			name: "Анимациии",
			technologies: ["React-spring", "Framer"],
			image: images.animation,
		},
		{
			name: "Система контроля версий",
			technologies: ["Git", "Github"],
			image: images.git,
		},
		{
			name: "Backend",
			technologies: ["Express", "Nest"],
			image: images.server,
		},
		{
			name: "DB и CRM",
			technologies: ["Prisma", "monogdb(нативно)"],
			image: images.db,
		},
	];

	return (
		<animated.div className={styles.container} style={mountSpring}>
			<h1 className={styles.title}>
				Хэй меня зовут Кирилл, я Junior Frontend Developer и это мое
				сайт-портфолио
			</h1>
			<h2 className={styles.subtitle}>Обо мне</h2>
			<div className={styles.text}>
				<p>
					Увлекаюсь программированием уже довольно долгое время(с самого раннего
					детства) и действительно увлечён этой сферой. Около полугода назад,
					серьезно занялся веб-разработкой, поэтому почувствовал надобность в
					реализации своих проектов через сайт-портфолио
				</p>
				<p>
					Опыт в работе с JS и алгоритмах:{" "}
					<a href="https://www.codewars.com/users/kirill303">
						3kyu на CODEWARS
					</a>{" "}
					, в топ 3000 программистов
				</p>
			</div>
			<ul className={styles.groups}>
				<div className={styles.groups__text}>Вот мой стэк технологий</div>
				<ul className={styles.gropus__list}>
					{technologies.map((technology) => (
						<StackItem groupTechnologies={technology} />
					))}
				</ul>
			</ul>
		</animated.div>
	);
};
export { Info };
