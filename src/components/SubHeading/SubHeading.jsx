/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import './SubHeading.css';

export const SubHeading = () => {
	const address = 'https://yandex.ru/maps/-/CDFfiOmB';
	const phoneNumber = '+7 (917) 548-38-86';
	const tagline = 'Бар, где каждый чувствует себя как дома';
	const streetAdress = 'Г. Люберцы ул 8 18к1';
	const [showButton, setShowButton] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 890) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<div className="content">
			<main>
				<div className="main-page-heading">
					<h1>Бар "Щука"</h1>
					<ul>
						<li>
							<a
								href={address}
								target="_blank"
							>
								{streetAdress}
							</a>
						</li>
						<li>
							<a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
						</li>
					</ul>
				</div>
				<div className="tagline">
					<p className="hover-text">
						<span>{tagline}</span>
					</p>
				</div>
			</main>
			{showButton && (
				<button
					className="scroll-to-top"
					onClick={scrollToTop}
				>
					<i className="fa-solid fa-arrow-up"></i>
				</button>
			)}
		</div>
	);
};
