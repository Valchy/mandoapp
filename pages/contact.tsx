import Link from 'next/link';
import { Page } from '../components/Layout/Page';
import { Header } from '../components/Team/styles';

export default function Contact() {
	return (
		<Page>
			<title>Mando | Contact</title>
			<div className="container mw-100">
				<Header>Contact Us</Header>
				<p style={{ display: 'flex', flexDirection: 'column', color: '#fff', fontSize: 22 }}>
					<span>Send us your inquiry at:</span>
					<Link href="mailto:mandoapp.contact@gmail.com">
						<a style={{ color: '#fff' }}>mandoapp.contact@gmail.com</a>
					</Link>
				</p>
			</div>
		</Page>
	);
}
