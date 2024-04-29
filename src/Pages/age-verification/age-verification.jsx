import './age-verification.css';
import { PikeLogo } from '../../assets/assets.js';
import { useState } from 'react';

export const AgeVerification = () => {
	const [isAgeConfirmed, setIsAgeConfirmed] = useState(false);
	const body =	document.body

	let preventScroll = (event) => {
		event.preventDefault();
		event.stopPropagation();
		return false;
	};

	window.onbeforeunload = function () {
		window.scrollTo(0,0);
	};

	if (!isAgeConfirmed) {
		body.style.overflow = 'hidden';
		body.addEventListener('wheel', preventScroll, {passive: false});
	} else {
		body.style.overflow = 'auto';
		body.removeEventListener('wheel', preventScroll, {passive: false});
	}

	const handleAccept = () => {
		setIsAgeConfirmed(true);
		body.removeEventListener('wheel', preventScroll, {passive: false});
		localStorage.setItem('userAge', 'true');
	};


	return (
		<>
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
						<div className="verification_buttons">
							<button
								onClick={handleAccept}
								className="accept_button"
							>
								Мне исполнилось 18 лет
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}


