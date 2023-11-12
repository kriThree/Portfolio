import p1i1 from "../../../public/image/project1/Screenshot_1.png";
import p1i2 from "../../../public/image/project1/Screenshot_2.png";
import p1i3 from "../../../public/image/project1/Screenshot_3.png";
import p2i1 from "../../../public/image/project2/Screenshot_1.png";
import p2i2 from "../../../public/image/project2/Screenshot_2.png";
import p2i3 from "../../../public/image/project2/Screenshot_3.png";
import p3i1 from "../../../public/image/project3/Screenshot_1.png";
import p3i2 from "../../../public/image/project3/Screenshot_2.png";
import p3i3 from "../../../public/image/project3/Screenshot_3.png";
import p4i1 from "../../../public/image/project4/Screenshot_1.png";
import p4i2 from "../../../public/image/project4/Screenshot_2.png";
import p4i3 from "../../../public/image/project4/Screenshot_3.png";
import p5i1 from "../../../public/image/project5/Screenshot_1.png";
import p5i2 from "../../../public/image/project5/Screenshot_2.png";
import p5i3 from "../../../public/image/project5/Screenshot_3.png";


export type Technology =
	| "HTML"
	| "CSS"
	| "JavaSctipt"
	| "SCSS"
	| "ReactJs"
	| "TypeScript"
	| "Redux-toolkit";

export interface Project {
	github: string;
	stack: Technology[];
	name: string;
	description: string;
	secondaryImages: string[];
	primaryImage?: string;
	isLanding?: boolean;
	isWeb?: boolean;
	siteLink?: string;
}

export const projects: Project[] = [
	{
		name: "Marico",
		description: "Лэндинг сделанный мной в самом начале обучения",
		stack: ["HTML", "CSS"],
		isLanding: true,
		isWeb: true,
		github: "https://github.com/kriThree/Marico-layout",
		primaryImage: p1i1,
		secondaryImages: [p1i2, p1i3],
	},
	{
		name: "Whitesquare",
		description: "Также типовой лэндинг",
		stack: ["HTML", "CSS"],
		isLanding: true,
		isWeb: true,
		github: "https://github.com/kriThree/whitesquare",
		primaryImage: p2i1,
		secondaryImages: [p2i2, p2i3],
	},
	{
		name: "Relvise",
		description: "Лэндинг с адаптивом",
		stack: ["HTML", "CSS"],
		isLanding: true,
		isWeb: true,
		github: "https://github.com/kriThree/Relvise",
		primaryImage: p3i1,
		secondaryImages: [p3i2, p3i3],
	},
	{
		name: "Konstrukt",
		description: "Лэндинг с адаптивом",
		stack: ["HTML", "CSS"],
		isLanding: true,
		isWeb: true,
		github: "https://github.com/kriThree/konstrukt",
		primaryImage: p4i1,
		secondaryImages: [p4i2, p4i3],
	},
	{
		name: "Exodo",
		description:
			"Полноценное todo приложение с полным циклом разработки от макета на фигме до бэкенда и фронта",
		stack: ["ReactJs", "JavaSctipt", "Redux-toolkit"],
		isLanding: false,
		isWeb: true,
		github: "https://github.com/kriThree/exodo",
		primaryImage: p5i1,
		secondaryImages: [p5i2, p5i3],
	},
];
