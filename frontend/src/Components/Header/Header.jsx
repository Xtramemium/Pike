import { useState, useEffect } from 'react';
import { Contacts } from '../Contacts/Contacts.jsx';

const Header = () => {
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 0); // Update state based on scroll position
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
		};
	}, []);

	return (
		<header
			className={'w-full bg-black sm: h-5'}
		>
			<ul>
				<li>Menu PDF</li>
				<li>Меню</li>
				<li>Наша команда</li>
				<Contacts/>
			</ul>
		</header>
	);
};

export default Header;
