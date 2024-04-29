import { phoneNumber } from '../../constans';
import './social-media.css';

export const SocialMedia = () => {
	return (
		<div className="Social_media">
			<div className="line" />
			<div className="Social_media_container">
				<h2> Наши соц.сети</h2>
				<div className="Social_media_links">
					<div>
						<a
							href={'https://t.me/PikeBeerBar'}
							target="_blank"
						>
							<i className="fa-brands fa-telegram"></i>
							Telegram
						</a>
					</div>
					<div>
						<a
							href={'https://www.instagram.com/pike_beer?igsh=MWRzeXpveTB0Nmk4Zg=='}
							target="_blank"
						>
							<i className="fa-brands fa-instagram"></i>
							Instagram
						</a>
					</div>{' '}
					<div>
						<a
							href={'https://vk.com/pikebeer'}
							target="_blank"
						>
							<i
								className="fa fa-vk"
								aria-hidden="true"
							></i>
							Вконтакте
						</a>
					</div>
				</div>
				<h2>Забронировать столик</h2>
				<p>
					{' '}
					<a href={`tel:${phoneNumber}`}>
						<span> {phoneNumber}</span>
					</a>
				</p>
			</div>
			<div className="line" />
		</div>
	);
};
