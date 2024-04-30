import {
	BackgroundVideo,
	Broadcasts,
	FindUs,
	Gallery,
	MenusSection,
	SocialMedia,
} from '../../components';
import './main-page.css';

export const MainPage = () => {
	return (
		<div className="main-page-wrapper">
			<BackgroundVideo />
			<Gallery />
			<MenusSection />
			<Broadcasts />
			<SocialMedia />
			<FindUs />
		</div>
	);
};
