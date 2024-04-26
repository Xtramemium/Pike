/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import './SubHeading.css';
import { addressLink, phoneNumber, pubName, streetAdress, tagline } from '../../constans';

export const SubHeading = () => {
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
					<h1>{pubName}</h1>
					<ul>
						<li>
							<i className="fa-solid fa-location-dot"></i>
							<a
								href={addressLink}
								target="_blank"
							>
								{streetAdress}
							</a>
						</li>
						<li>
							<i className="fa-solid fa-phone"></i>
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
