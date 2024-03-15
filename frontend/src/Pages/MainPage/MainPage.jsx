import './MainPage.css';
import { BackgroundVideo, Gallery, MenuSection } from '../../components';

export const MainPage = () => {
	return (
		<div className="main-page-wrapper">
			<BackgroundVideo />
			<Gallery />
			<MenuSection />
		</div>
	);
};
