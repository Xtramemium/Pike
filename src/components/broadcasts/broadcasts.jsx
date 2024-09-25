import { alt_image, sport_tr } from '../../assets/assets.js';
import {
	sportBroadcasts,
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
					{"Это еще один повод собраться большой компанией в \"Щуке\""} <br /> {"и отлично провести время"}
				</p>
			</section>
		</div>
	);
};
