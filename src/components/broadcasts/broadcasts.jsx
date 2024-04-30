import { alt_image, sport_tr } from '../../assets/assets.js';
import {
	sportBroadcasts,
	sportBroadcastsDescription,
	sportBroadcastsDescription2,
} from '../../constans';
import './broadcasts.css';

export const Broadcasts = () => {
	return (
		<div className="broadcasts-section">
			<section className="broadcasts">
				<h2>{sportBroadcasts}</h2>
				<img
					src={sport_tr}
					alt={alt_image}
				/>
				<p>
					{sportBroadcastsDescription} <br /> {sportBroadcastsDescription2}
				</p>
			</section>
		</div>
	);
};
