import { useState } from 'react';
import Pike_logo from '../../assets/Pike_logo.webp';
import hambur_logo from '../../assets/hambur_menu.png';
import close_menu from '../../assets/close_menu.png';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="header">
			<nav>
				<div className="image-container">
					<img
						src={Pike_logo}
						className="logo"
					/>
				</div>
				<div
					display={!isMenuOpen ? 'hidden' : 'block'}
					className="links-container"
				>
					<ul>
						<Link to={'./menu'}> Menu</Link>
						<Link to={'./MenuPdf'}> Menu pdf</Link>
						<Link to={'./Contacts'}> Contacts</Link>
						<Link to={'./our-team'}> Our team</Link>
					</ul>
				</div>
				<button
					className="button-logo"
					onClick={toggleMenu}
				>
					{isMenuOpen ? (
						<img
							src={hambur_logo}
							alt="Open menu"
						/>
					) : (
						<img
							src={close_menu}
							alt="Closed menu"
						/>
					)}
				</button>
			</nav>
		</header>
	);
};
