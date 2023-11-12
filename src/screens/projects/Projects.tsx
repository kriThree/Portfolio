import { FC, useState} from "react";
import styles from "./projects.module.scss";
import { Project, projects } from "../../app";
import ProjectItem from "./projectItem/ProjectItem";
import { useTransition } from "@react-spring/web";

const Projects: FC = () => {
	const [activeIndex, setActiveIndex] = useState<null | number>(null);
	const projectsTransitions = useTransition<Project, {}>(projects, {
		trail: 1000 / projects.length,
		leave: {
			opacity: 0,
		},
		enter: {
			scale: 1,
			opacity: 1,
		},
		from: {
			opacity: 0,
		},
	});
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Проекты</h1>
			<ul className={styles.projects}>
				{projectsTransitions((style, project, _, index) => (
					<ProjectItem
						style={style}
						key={index}
						project={project}
						active={activeIndex === index}
						setActiveIndex={() => setActiveIndex(index)}
					/>
				))}
			</ul>
		</div>
	);
};

export { Projects };
