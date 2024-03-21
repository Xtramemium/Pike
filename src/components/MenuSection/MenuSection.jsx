import img1 from '../../assets/img1.webp';
import chizborg from '../../assets/chizborg.webp';
import unknown_img from '../../assets/unknown_img.webp';
import './MenuSection.css';
import { Link } from 'react-router-dom';

export const MenuSection = () => {
	return (
		<div className="menu-section">
			<div className="introdusing">
				<div className="beer__section">
					<img
						src={img1}
						alt={unknown_img}
						loading="lazy"
					/>
					<div>
						<h2>Пивная карта</h2>
						<p>Мы собрали для вас лучшие сорта пива со всех уголгов нашей страны </p>
					</div>
					<Link
						to="https://drive.google.com/file/d/18wHaBgY2vZhChfUWzsf7AVFj4jhpp2a4/view?usp=sharing"
						target="_blank"
					>
						Посмотреть все виды пива
					</Link>{' '}
				</div>
				<div className="food__section">
					<img
						src={chizborg}
						alt={unknown_img}
						loading="lazy"
					/>
					<div>
						<h2>Основное меню</h2>
						<p>Закуски к пиву и полноценные блюда, специально для вас </p>
					</div>
					<Link
						to="https://drive.google.com/file/d/17rAABzMZdoxF5WGqh6sLNrGz3a7T132S/view?usp=sharing"
						target="_blank"
					>
						Посмотреть меню
					</Link>
				</div>
			</div>
		</div>
	);
};
