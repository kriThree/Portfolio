import { FC, useMemo, useRef, useState } from "react";
import styles from "./contacts.module.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGoogle, faTelegram, faVk } from "@fortawesome/free-brands-svg-icons";
import { ContactItem } from "./contactItem/ContactItem";
export type Contact = {
	icon: IconProp;
	description: string;
	name: string;
	link: string;
};
const Contacts: FC = () => {
	const contactsRef = useRef(null);
	const [activeIndex, setActiveIndex] = useState<null | number>(null);
	const contacts = useMemo<Contact[]>(
		() => [
			{
				icon: faTelegram,
				description: "Самый предпочтительный",
				link: "https://t.me/kriThree",
				name: "Телеграм",
			},
			{
				icon: faVk,
				description: "Менее предпочтительный",
				link: "https://vk.com/cookbookanarchist",
				name: "ВК",
			},
			{
				icon: faGoogle,
				description: "Средне предпочтительный",
				link: "mailto:yakovlevKirill303@gmail.com",
				name: "Email",
			},
		],
		[]
	);

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Список контактов для связи со мной </h1>
			<div className={styles.contacts} ref={contactsRef}>
				{contacts.map((contact, index) => (
					<ContactItem
						setActiveIndex={setActiveIndex}
						activeIndex={activeIndex}
						index={index}
						contact={contact}
						key={contact.name}
					/>
				))}
			</div>
		</div>
	);
};

export { Contacts };
