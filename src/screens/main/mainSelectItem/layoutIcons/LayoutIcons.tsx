import {
	FC,
	PropsWithChildren,
	useMemo,
} from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { MiniIcon } from "./miniIcon/MiniIcon";
import {
	Coordinates,
	generatingCoordinates,
} from "./generateCoordinates";

interface ILayoutIcons extends PropsWithChildren<unknown> {
	parts: IconProp[];
	hover: boolean;
	animation: Object;
}

export type MountPart = { part: IconProp; coordinates: Coordinates };

const LayoutIcons: FC<ILayoutIcons> = ({
	children,
	parts,
	hover,
	animation,
}) => {
	const stack: Coordinates[] = [];
	const mountParts: MountPart[] = useMemo(() => {
		return parts.map((part) => {
			return { part, coordinates: generatingCoordinates(stack) };
		});
	}, []);

	return (
		<div>
			{children}
			{mountParts.map((part, i) => (
				<MiniIcon animation={animation} part={part} key={i} hover={hover} />
			))}
		</div>
	);
};

export { LayoutIcons };
