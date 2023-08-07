import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header/Header.css';

export default function Header() {
	const location = useLocation();
	const [activePage, setActivePage] = useState('/');

	useEffect(() => {
		setActivePage(location.pathname);
	}, [location.pathname]);

	return (
		<header>
			<Link to="/" className="header__logo">
				<img src="../src/assets/img/kasa_logo.svg" alt="Logo Kasa" />
			</Link>
			<ul className="navbar">
				<li className={activePage === '/' ? 'navbar__link navbar__link--active' : 'navbar__link'}>
					<Link to="/">Accueil</Link>
				</li>
				<li className={activePage === '/about' ? 'navbar__link navbar__link--active' : 'navbar__link'}>
					<Link to="/about">A Propos</Link>
				</li>
			</ul>
		</header>
	);
}