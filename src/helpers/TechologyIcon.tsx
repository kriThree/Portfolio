import { FC } from "react";
import { Technology } from "../app";
import HTML from "../../public/image/stack/html.svg";
import CSS from "../../public/image/stack/css.svg";
import JavaSctipt from "../../public/image/stack/javascript.svg";
import SCSS from "../../public/image/stack/sass.svg";
import React from "../../public/image/stack/react.svg";
import TypeScript from "../../public/image/stack/typescript.svg";
import Redux from "../../public/image/stack/redux.svg";

interface IIcon {
	techonlogy: Technology;
}

const TechonlogyIcon: FC<IIcon> = ({ techonlogy }) => {
	switch (techonlogy) {
		case "HTML":
			return <img src={HTML} />;
		case "CSS":
			return <img src={CSS} />;

		case "JavaSctipt":
			return  <img src={JavaSctipt} />;;
		case "ReactJs":
			return  <img src={React} />;;
		case "SCSS":
			return  <img src={SCSS} />;;
		case "Redux-toolkit":
			return  <img src={Redux} />;;
		case "TypeScript":
			return  <img src={TypeScript} />;;
	}
};

export default TechonlogyIcon;
