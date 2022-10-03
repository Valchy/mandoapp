import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { NameTitle, Position } from './styles';

export default function TeamMembers({ member }) {
	const [hovered, setHovered] = useState(true);

	return (
		<motion.div className="col mx-5" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.7 }}>
			<motion.img
				src={member.avatar.url}
				alt={member.name}
				width={300}
				onMouseEnter={() => {
					setHovered(true);
				}}
				onMouseLeave={() => setHovered(false)}
				style={{
					cursor: 'pointer',
					zIndex: 3,
					filter: 'drop-shadow(5px 10px 10px rgba(0, 0, 0, 0.25)) grayscale(100%)',
					borderRadius: '50%'
				}}
				whileHover={{ scale: 1.1 }}
			/>

			<motion.div initial={{ y: -200, opacity: 0 }} animate={hovered && { y: 0, opacity: 1 }} style={{ zIndex: 2 }}>
				<NameTitle>{member.name}</NameTitle>
				<Position>{member.position}</Position>
			</motion.div>
		</motion.div>
	);
}
