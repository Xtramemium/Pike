import './Social.css';
import { Link } from 'react-router-dom';

export const SocialMedia = () => {
	return (
		<div className="Social_media">
			<div className="line" />
			<div className="Social_media_container">
				<h2> Наши соц.сети</h2>
				<div className="Social_media_links">
					<div>
						<Link
							to={'https://t.me/PikeBeerBar'}
							target="_blank"
						>
							<i className="fa-brands fa-telegram"></i>
							Telegram
						</Link>
					</div>
					<div>
						<Link
							to={'https://www.instagram.com/pike_beer?igsh=MWRzeXpveTB0Nmk4Zg=='}
							target="_blank"
						>
							<i className="fa-brands fa-instagram"></i>
							Instagram
						</Link>
					</div>
				</div>
			</div>
			<div className="line" />
		</div>
	);
};
