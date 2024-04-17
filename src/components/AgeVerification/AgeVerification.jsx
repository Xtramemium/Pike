import { ErrorPage } from '../ErrorPage/ErrorPage';
import './AgeVerification.css';
import { useNavigate } from 'react-router';
import { PikeLogo } from '../../assets/assets';

const AgeVerification = () => {
	const navigate = useNavigate();
	const handleAccept = () => {
		navigate('/MainPage');
	};

	const handleReject = () => {
		navigate('/AgeNotConfirmed');
	};

	return (
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
					<button
						onClick={handleReject}
						className="reject_button"
					>
						Мне не исполнилось 18 лет
					</button>
				</div>
			</div>
		</div>
	);
};

export default AgeVerification;
