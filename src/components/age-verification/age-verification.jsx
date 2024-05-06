import { useEffect, useState } from 'react';
import { PikeLogo } from '../../assets/assets.js';
import './age-verification.css';

export const AgeVerification = () => {
	const [isAgeConfirmed, setIsAgeConfirmed] = useState(
		Boolean(sessionStorage.getItem('userAge')),
	);

	const handleAccept = () => {
		sessionStorage.setItem('userAge', 'true');
		setIsAgeConfirmed(true);
	};

	useEffect(() => {
		const handleScroll = (event) => event.preventDefault();
		const { body } = document;

		if (!isAgeConfirmed) {
			body.style.overflow = 'hidden';
			body.addEventListener('wheel', handleScroll, { passive: false });
		} else {
			body.style.overflow = 'auto';
			body.removeEventListener('wheel', handleScroll);
		}

		return () => {
			body.removeEventListener('wheel', handleScroll);
		};
	}, [isAgeConfirmed]);

	return (
		<div className={`overlay ${isAgeConfirmed ? 'hidden' : ''}`}>
			<div className="age-verification">
				<div className="ver_logo">
					<img
						src={PikeLogo}
						alt=""
					/>
				</div>
				<div className="ver_container">
					<h2>Добро пожаловать</h2>
					<p>
						Сайт содержит информацию, не&nbsp;рекомендованную для лиц, не&nbsp;достигших
						севершеннолетия. Сведения размещенные на&nbsp;сайте, носят исключительно
						информативный характер и&nbsp;предназначены только для личного использования
					</p>
					{!isAgeConfirmed && (
						<button
							onClick={handleAccept}
							className="accept_button"
						>
							Мне исполнилось 18 лет
						</button>
					)}
				</div>
			</div>
		</div>
	);
};
