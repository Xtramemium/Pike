import './Broadcasts.css';
import unknown_img from '../../assets/unknown_img.webp';
import sport_tr from '../../assets/sport_tr.jpg';

export const Broadcasts = () => {
	return (
		<div className="broadcasts-section">
			<section className="broadcasts">
				<h2>Спортивные трансляции</h2>
				<img
					src={sport_tr}
					alt={unknown_img}
					loading="lazy"
				/>
				<p>
					Это еще один повод собраться большой компанией в "Щуке" <br /> и отлично
					провести время
				</p>
			</section>
		</div>
	);
};
