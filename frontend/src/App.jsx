import { BackgroundVideo, Header } from './Components';
import { MainPage } from './Pages/MainPage/MainPage';
export const App = () => {
	return (
		<div className="app-container">
			<BackgroundVideo />
			<Header />
			<MainPage />
		</div>
	);
};
