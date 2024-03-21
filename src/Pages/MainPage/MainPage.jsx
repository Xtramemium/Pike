import './MainPage.css';
import {
	BackgroundVideo,
	Broadcasts,
	FindUs,
	Gallery,
	MenuSection,
	SocialMedia,
} from '../../components';

export const MainPage = () => {
	return (
		<div className="main-page-wrapper">
			<BackgroundVideo />
			<Gallery />
			<MenuSection />
			<Broadcasts />
			<SocialMedia />
			<FindUs />
		</div>
	);
};
