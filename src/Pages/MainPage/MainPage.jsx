import './MainPage.css';
import {
	BackgroundVideo,
	Broadcasts,
	FindUs,
	Gallery,
	SocialMedia,
	MenusSection,
} from '../../components';

export const MainPage = () => {
	return (
		<div className="main-page-wrapper">
			<BackgroundVideo />
			<Gallery />
			{/* <MenuSection /> */}
			<MenusSection />
			<Broadcasts />
			<SocialMedia />
			<FindUs />
		</div>
	);
};
