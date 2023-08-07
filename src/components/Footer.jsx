import '../styles/Footer/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer>
			<Link to="/" className="footer__logo">
				<img src="../src/assets/img/kasa_logo.svg" alt="Logo Kasa" />
			</Link>
			<p>&#169; 2020 Kasa. All rights reserved</p>
		</footer>
	);
}

export default Footer;