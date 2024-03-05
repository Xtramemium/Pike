import { useState } from 'react';
import Pike_logo from '../../assets/Pike_logo.webp';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
	const [isMenuOpened, setIsMenuOpened] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpened(!isMenuOpened);
	};

	return (
		<header>
			<nav>
				<ul className={`sidebar ${isMenuOpened ? 'open' : ''}`}>
					<li
						className="menu-button"
						onClick={toggleMenu}
					>
						<svg
							fill="#FFFFFF"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 64 64"
							width="40px"
							height="40px"
						>
							<path d="M 16 14 C 15.488 14 14.976938 14.194937 14.585938 14.585938 C 13.804937 15.366937 13.804937 16.633063 14.585938 17.414062 L 29.171875 32 L 14.585938 46.585938 C 13.804938 47.366938 13.804937 48.633063 14.585938 49.414062 C 14.976937 49.805062 15.488 50 16 50 C 16.512 50 17.023062 49.805062 17.414062 49.414062 L 32 34.828125 L 46.585938 49.414062 C 47.366938 50.195063 48.633063 50.195062 49.414062 49.414062 C 50.195063 48.633062 50.195062 47.366937 49.414062 46.585938 L 34.828125 32 L 49.414062 17.414062 C 50.195063 16.633063 50.195062 15.366938 49.414062 14.585938 C 48.633062 13.804938 47.366937 13.804938 46.585938 14.585938 L 32 29.171875 L 17.414062 14.585938 C 17.023062 14.194938 16.512 14 16 14 z" />
						</svg>
					</li>
					<li>
						<Link to={'/Menu'}> Меню </Link>
					</li>
					<li>
						<Link to={'/MenuPDF'}> Меню PDF </Link>
					</li>
					<li>
						<Link to={'/Our-team'}> Наша команда </Link>
					</li>
					<li>
						<Link to={'/Menu'}> Контакты </Link>
					</li>
				</ul>
				<ul>
					<li className="Pike-pub">
						<Link to={'/'}>Бар "Щука"</Link>
					</li>
					<li className="hideOnMobile">
						<Link to={'/Menu'}> Меню </Link>
					</li>
					<li className="hideOnMobile">
						<Link to={'/MenuPDF'}> Меню PDF </Link>
					</li>
					<li className="hideOnMobile">
						<Link to={'/Our-team'}> Наша команда </Link>
					</li>
					<li className="hideOnMobile">
						<Link to={'/Menu'}> Контакты </Link>
					</li>
					<li
						className="menu-button"
						onClick={toggleMenu}
					>
						<svg
							fill="#FFFFFF"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 50 50"
							width="40px"
							height="40px"
						>
							<path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z" />
						</svg>
					</li>
				</ul>
			</nav>
		</header>
	);
};
