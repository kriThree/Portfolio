import { FC } from "react";
import { Project } from "../../../app";
import styles from "./projectItem.module.scss";
import Icon from "../../../helpers/TechologyIcon";
import { animated } from "@react-spring/web";

interface IProjectItem {
	project: Project;
	active?: boolean;
	setActiveIndex: () => void;
	style: Object;
}
const ProjectItem: FC<IProjectItem> = ({
	project,
	style,
	setActiveIndex,
}) => {
	return (
		<animated.li
			className={styles.project}
			style={style}
			onClick={() => setActiveIndex()}
		>
			<div className={styles.image}>
				<img src={project.primaryImage} alt="preview" />
			</div>
			<div className={styles.stack}>
				{project.stack.map((techonlogy) => (
					<div className={`${styles.techonlogy}`} key={techonlogy}>
						<Icon techonlogy={techonlogy} />
					</div>
				))}
			</div>
			<h2 className={styles.name}>{project.name}</h2>
			<p className={`${styles.description}`}>{project.description}</p>
			<a href={project.github} className={styles.github}>Github</a>
		</animated.li>
	);
};

export default ProjectItem;
