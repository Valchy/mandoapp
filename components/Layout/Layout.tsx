import Link from 'next/link';
import { ReactNode, useRef, useState } from 'react';
import { NavbarLogo, ButtonCol, Navbar } from './styles';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

type DashboardLayoutProps = {
	children: ReactNode;
};

export default function Layout({ children }: DashboardLayoutProps) {
	const router = useRouter();

	return (
		<div className="App">
			<div className=" d-flex justify-content-between " style={{ minWidth: '100vw' }}>
				<Navbar className="Navbar row">
					<div className="col d-flex">
						<Link href="/">
							<NavbarLogo>MANDO</NavbarLogo>
						</Link>
						<div className="col d-flex justify-content-end mr-5">
							<Link href="/about">
								<ButtonCol>About</ButtonCol>
							</Link>
							<Link href="/team">
								<ButtonCol>Our team</ButtonCol>
							</Link>
							<Link href="/contact">
								<ButtonCol>Contact us</ButtonCol>
							</Link>
						</div>
					</div>
				</Navbar>

				<div
					className="row w-100"
					style={
						router.pathname === '/'
							? {
									overflow: 'hidden',
									minHeight: '100vh'
							  }
							: {}
					}
				>
					<div
						style={{
							minHeight: '90vh',
							display: 'flex',
							justifyContent: 'center',
							alignContent: 'center',
							paddingTop: '10vh'
						}}
					>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}
