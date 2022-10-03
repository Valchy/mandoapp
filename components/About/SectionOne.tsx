import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { SectionDescription, SectionHeading, SectionWrapper, StarSVG } from './styles';

const transition = { duration: 2, ease: 'easeInOut', delay: 1 };

export default function SectionOne({ section }) {
	const control = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			control.start('visible');
		} else {
			control.start('hidden');
		}
	}, [control, inView]);

	const sectionVariants = {
		visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
		hidden: { opacity: 0, x: 200 }
	};
	return (
		<motion.div ref={ref} variants={sectionVariants} initial="hidden" animate={control}>
			<SectionWrapper className="row mt-5 pt-5">
				<motion.div className="col ml-5 mw-75" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ type: 'spring', duration: 1 }}>
					<SectionHeading>{section.heading}</SectionHeading>
					<SectionDescription dangerouslySetInnerHTML={{ __html: section.description.html }} />
				</motion.div>
				<div className="col">
					{section.image?.url && (
						<motion.img
							src={section.image.url}
							alt={section.heading}
							width={350}
							initial={{ x: 300, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ type: 'spring', duration: 1 }}
							style={{ borderRadius: '3px' }}
						/>
					)}
				</div>
				<StarSVG>
					<svg width="186" height="183" viewBox="0 0 186 183" fill="none" xmlns="http://www.w3.org/2000/svg">
						<motion.path
							initial={{ pathLength: 0, opacity: 0 }}
							animate={{ pathLength: 1, opacity: 1 }}
							transition={transition}
							d="M101.63 166.624C93.473 150.976 85.0818 135.428 77.1502 119.666C67.1689 99.8296 61.7074 78.1919 51.4784 58.5705C50.758 57.1886 46.2399 49.6927 51.7386 52.4858C68.0545 60.7735 84.0777 71.5138 98.8427 82.2724C122.28 99.3502 146.176 114.344 167.733 133.879C179.036 144.123 171.996 142.669 161.064 139.301C146.903 134.938 132.64 128.926 118.095 126.006C105.011 123.38 89.9492 121.88 76.6527 122.442C60.3798 123.129 44.6184 129.695 28.3045 129.113C24.6263 128.981 21.1829 128.223 17.496 128.569C1.5466 130.068 34.1829 105.954 34.8469 105.452C71.4875 77.7876 110.742 53.6267 148.791 27.9757C153.023 25.1221 157.227 22.225 161.487 19.4119C164.48 17.4353 170.477 10.512 170.835 14.0811C171.272 18.4324 166.358 21.5945 164.129 25.3568C158.25 35.2781 154.527 41.8803 148.79 52.1154C135.585 75.6761 124.045 99.6945 112.207 123.928C104.653 139.392 96.2532 153.598 91.0705 170.069"
							stroke="#FBFF39"
							strokeWidth="25"
							strokeLinecap="round"
						/>
					</svg>
				</StarSVG>
			</SectionWrapper>
		</motion.div>
	);
}
