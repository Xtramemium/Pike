import './age-verification.css';
import { PikeLogo } from '../../assets/assets.js';
import { useState, useEffect } from 'react';

export const AgeVerification = () => {
	const [isAgeConfirmed, setIsAgeConfirmed] = useState(
		localStorage.getItem('userAge') === 'true',
	);
	console.log(isAgeConfirmed, '1');
	useEffect(() => {
		if (!isAgeConfirmed) {
			document.body.style.overflow = 'hidden';
			document.body.addEventListener('wheel', preventScroll, { passive: false });
		} else {
			document.body.style.overflow = 'auto';
			document.body.removeEventListener('wheel', preventScroll, { passive: false });
		}
		console.log(isAgeConfirmed, '2');
		return () => {
			document.body.removeEventListener('wheel', preventScroll, { passive: false });
		};
	}, [isAgeConfirmed]);

	const handleAccept = () => {
		setIsAgeConfirmed(true);
		localStorage.setItem('userAge', 'true');
	};

	const preventScroll = (event) => {
		event.preventDefault();
		event.stopPropagation();
	};

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
						Сайт содержит информацию, не рекомендованную для лиц, не достигших
						совершеннолетия. Сведения, размещенные на сайте, носят исключительно
						информационный характер и предназначены только для личного использования
					</p>
					{!isAgeConfirmed && (
						<div className="verification_buttons">
							<button
								onClick={handleAccept}
								className="accept_button"
							>
								Мне исполнилось 18 лет
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
