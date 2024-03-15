import img1 from '../../assets/img1.webp';
import unknown_img from '../../assets/unknown_img.webp';
import './MenuSection.css';
import { Link, useNavigate } from 'react-router-dom';

export const MenuSection = () => {
	const navigate = useNavigate();

	const navigateToBeer = () => {
		navigate('/beerPDF');
	};

	return (
		<div className="menu-section">
			<img
				src={img1}
				alt={unknown_img}
			/>
			<div className="introdusing">
				<h2>Пивная карта</h2>
				<p>Мы собрали для вас лучшие сорта пива со всех уголгов нашей страны </p>
			</div>
			<Link
				to="https://drive.google.com/file/d/1u2EBk7rRWDRb_s52tWsPYvow6WNhfzpD/view"
				target="_blank"
			>
				Посмотреть все виды пива
			</Link>
		</div>
	);
};
