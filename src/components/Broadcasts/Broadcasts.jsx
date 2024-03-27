import './Broadcasts.css';
import unknown_img from '../../assets/unknown_img.webp';

export const Broadcasts = () => {
	return (
		<div className="broadcasts-section">
			<section>
				<h2>Спортивные трансляции</h2>
				<img
					src="https://aviator.pub/sites/default/files/sport_tr.jpg"
					alt={unknown_img}
					loading="lazy"
				/>
				<p>
					Это еще один повод собраться большой компанией в "Щуке" и отлично провести время
				</p>
			</section>
		</div>
	);
};
