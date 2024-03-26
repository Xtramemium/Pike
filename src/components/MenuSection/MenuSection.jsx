import img1 from '../../assets/img1.webp';
import chizborg from '../../assets/chizborg.webp';
import Midii from '../../assets/Midii.jpg';
import Potato_fry from '../../assets/Potato_fry.jpg';
import Sheki from '../../assets/Sheki.jpg';
import TarTar from '../../assets/TarTar.jpg';
import Wings from '../../assets/Wings.jpg';
import Crevets from '../../assets/Greni.jpg';
import unknown_img from '../../assets/unknown_img.webp';
import './MenuSection.css';
import { Link } from 'react-router-dom';
import { Slider } from '../Swiper/Slider';

export const MenuSection = () => {
	const food = [
		{ src: Midii },
		{ src: Potato_fry },
		{ src: Sheki },
		{ src: chizborg },
		{ src: Crevets },
		{ src: Wings },
		{ src: TarTar },
	];
	return (
		<div className="menu-section">
			<div className="introdusing">
				<div className="beer-section">
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
				<div className="food-section">
					<Slider images={food} />
					<div>
						<h2>Основное меню</h2>
						<p>Закуски к пиву и полноценные блюда, специально для вас </p>
					</div>
					<Link
						to="https://drive.google.com/file/d/1u2EBk7rRWDRb_s52tWsPYvow6WNhfzpD/view?usp=sharing"
						target="_blank"
					>
						Посмотреть меню
					</Link>
				</div>
			</div>
		</div>
	);
};
