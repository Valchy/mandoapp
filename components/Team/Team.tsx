import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { NameTitle, Position } from "./styles";

export default function TeamMembers({ member }) {
	const [render, setRender] = useState(false);
	const [hovered, setHovered] = useState(false);

	useEffect(() => {
		setRender(true);
	}, []);

	return (
		<motion.div
			className="col mx-5"
			initial={{ scale: 0 }}
			animate={render && { scale: 1 }}
		>
			<motion.img
				src={member.avatar.url}
				alt={member.name}
				width={300}
				onMouseEnter={() => {
					setHovered(true);
				}}
				onMouseLeave={() => setHovered(false)}
				style={{
					cursor: "pointer",
					zIndex: 3,
					filter: "drop-shadow(5px 10px 10px rgba(0, 0, 0, 0.25))",
				}}
				whileHover={{ scale: 1.1 }}
			/>

			<motion.div
				initial={{ y: -200, opacity: 0 }}
				animate={hovered && { y: 0, opacity: 1 }}
				style={{ zIndex: 2 }}
			>
				<NameTitle>{member.name}</NameTitle>
				<Position>{member.position}</Position>
			</motion.div>
		</motion.div>
	);
}
