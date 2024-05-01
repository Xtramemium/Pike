import { useEffect, useState } from 'react';
import { PikeLogo } from '../../assets/assets.js';
import './age-verification.css';

export const AgeVerification = () => {
	const [isAgeConfirmed, setIsAgeConfirmed] = useState(
		localStorage.getItem('userAge') === 'true',
	);
	useEffect(() => {
		if (!isAgeConfirmed) {
			document.body.style.overflow = 'hidden';
			document.body.addEventListener('wheel', preventScroll, { passive: false });
		} else {
			document.body.style.overflow = 'auto';
			document.body.removeEventListener('wheel', preventScroll, { passive: false });
		}
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
						Сайт содержит информацию, не&nbsp;рекомендованную для лиц, не&nbsp;достигших
						севершеннолетия. Сведения. размещенные на&nbsp;сайте, носят исключительно
						информативный характер и&nbsp;предназначены только для личного использования
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
