import type { NextPage } from 'next';
import { Page } from '../components/Layout/Page';
import { motion } from 'framer-motion';
import Trace from '../components/Trace/Trace';

const Home: NextPage = () => {
	return (
		<Page home>
			<title>Mando</title>
			<div className="container d-flex align-items-center justify-content-center h-100">
				<div className="col-lg d-flex flex-col flex-wrap pt-5">
					<motion.div
						style={{
							maxHeight: 100,
							overflow: 'hidden',
							alignContent: 'end',
							display: 'flex',
							flexDirection: 'column',
							paddingTop: '20px'
						}}
					>
						<motion.h1
							className="text-start"
							animate={{ y: [-20, -100], opacity: [1, 0] }}
							transition={{
								type: 'spring',
								duration: 0.8,
								delay: 2.2
							}}
							style={{
								fontSize: '64px',
								marginTop: '30px',
								lineHeight: 0.8,
								color: 'white'
							}}
						>
							Instant
						</motion.h1>
						<motion.h1
							className="text-start"
							initial={{ y: 100, opacity: 0 }}
							animate={{ y: [0, -110, -110, -200], opacity: [0, 1, 1, 0] }}
							transition={{
								type: 'spring',
								duration: 2.5,
								delay: 2.3
							}}
							style={{
								fontSize: '64px',
								marginTop: '30px',
								lineHeight: 0.8,
								color: 'white'
							}}
						>
							Direct
						</motion.h1>
						<motion.h1
							initial={{ y: 100, opacity: 0 }}
							animate={{ y: [0, -90, -200], opacity: [0, 0, 1] }}
							transition={{
								type: 'spring',
								duration: 2,
								delay: 3
							}}
							style={{
								fontSize: '64px',
								marginTop: '30px',
								lineHeight: 0.8,
								color: 'white'
							}}
						>
							Simple
						</motion.h1>
					</motion.div>
					<h2
						style={{
							fontSize: '60px',
							lineHeight: 0.5,
							marginLeft: '130px',
							marginBottom: '30px',
							color: 'white'
						}}
					>
						Ordering.
					</h2>

					<p
						className="m-4 text-start"
						style={{
							color: 'rgba(255, 255, 255, 0.79)',
							width: '360px',
							display: 'flex',
							justifyContent: 'flex-start'
						}}
					>
						Stay close to your costumers and let them order directly from their phone.
					</p>
				</div>
				<div className="col-lg">
					<div style={{ maxWidth: 500, position: 'absolute', top: 0 }}>
						<img
							src="/spot.png"
							alt="spot"
							style={{
								maxWidth: '110%',
								position: 'relative',
								transform: 'translate(-10%,-45%)'
							}}
						/>
						<Trace />
						<div
							style={{
								position: 'relative',
								transform: 'translate(-10%,-330%)',
								overflow: 'hidden'
							}}
						>
							<motion.img
								initial={{ x: 20, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ type: 'spring', duration: 1, delay: 0.8 }}
								src="/landingIphone.png"
								alt="Landing Page Iphone"
								width={220}
							/>
							<motion.img
								initial={{ x: 20, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ type: 'spring', duration: 1, delay: 1 }}
								src="/menuIphone.png"
								alt="Menu Page Iphone"
								width={220}
							/>
						</div>
					</div>
				</div>
			</div>
		</Page>
	);
};

export default Home;
