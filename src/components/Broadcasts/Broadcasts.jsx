import './Broadcasts.css';
import unknown_img from '../../assets/unknown_img.webp';
import sport_tr from '../../assets/sport_tr.jpg';
import {
	sportBroadcasts,
	sportBroadcastsDescription,
	sportBroadcastsDescription2,
} from '../../constans';

export const Broadcasts = () => {
	return (
		<div className="broadcasts-section">
			<section className="broadcasts">
				<h2>{sportBroadcasts}</h2>
				<img
					src={sport_tr}
					alt={unknown_img}
				/>
				<p>
					{sportBroadcastsDescription} <br /> {sportBroadcastsDescription2}
				</p>
			</section>
		</div>
	);
};
