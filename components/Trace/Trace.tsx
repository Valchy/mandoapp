import { motion } from 'framer-motion';

const transition = { duration: 2, ease: 'easeInOut' };

export default function Trace() {
	return (
		<div className="container">
			<svg
				style={{
					position: 'relative',
					left: '50%',
					transform: 'translate(-45%, -110%)',
					maxWidth: '170%',
					minWidth: 300
				}}
				width="842"
				height="778"
				viewBox="0 0 842 778"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g filter="url(#filter0_d_94_4)">
					<motion.path
						fill="transparent"
						stroke-width="25"
						stroke-linecap="round"
						initial={{ pathLength: 0 }}
						animate={{ pathLength: 1 }}
						transition={transition}
						stroke="#FFE602"
						d="M373.806 13.2381C364.293 16.988 355.769 22.7341 346.837 28.0479C315.94 46.4298 284.306 62.9573 253.608 81.8651C201.347 114.055 144.538 151.459 104.392 202.957C101.24 207.001 93.8525 215.394 98.5426 221.178C107.418 232.122 137.96 217.557 146.731 214.845C199.732 198.455 252.661 180.752 304.783 160.71C348.205 144.015 390.444 123.472 433.825 106.68C442.805 103.204 449.997 99.2746 441.209 111.764C427.867 130.725 411.123 146.663 393.852 160.585C292.96 241.911 178.521 297.483 72.1069 367.837C54.757 379.308 35.0363 390.675 20.1641 406.53C16.256 410.697 14.1776 414.998 21.0111 415.009C27.338 415.019 33.7273 413.014 39.9198 411.692C59.3091 407.55 78.7711 403.965 98.2052 400.17C187.971 382.642 276.728 360.372 365.55 336.76C445.421 315.527 525.428 295.246 605.495 275.152C611.294 273.697 617.09 272.222 622.88 270.716C625.005 270.163 630.046 266.986 629.301 269.349C628.281 272.586 624.7 276.312 622.852 278.706C574.296 341.619 514.855 396.112 454.763 443.491C391.902 493.052 321.11 531.089 251.208 564.722C248.31 566.117 210.058 581.927 213.703 589.492C215.434 593.084 223.593 591.743 225.974 591.436C242.182 589.35 258.477 584.499 274.328 580.225C470.859 527.231 664.179 458.26 861.624 409.797C868.271 408.166 897.715 396.461 905.692 403.656C916.387 413.303 879.111 451.889 875.023 456.377C840.243 494.563 799.501 525.309 759.515 555.531C690.972 607.338 620.11 654.188 548.819 700.574C527.44 714.484 506.065 728.424 485.004 742.987C484.204 743.539 471.557 750.83 470.136 754.668C469.443 756.538 475.725 756.651 476.034 756.679"
					/>
				</g>
				<defs>
					<filter
						id="filter0_d_94_4"
						x="0.046875"
						y="0.734772"
						width="924.065"
						height="776.445"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="2" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_94_4" />
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_94_4" result="shape" />
					</filter>
				</defs>
			</svg>

			<motion.div initial={{ offsetDistance: '0%', scale: 2.5 }} animate={{ offsetDistance: '100%', scale: 1 }} transition={transition} />
		</div>
	);
}
