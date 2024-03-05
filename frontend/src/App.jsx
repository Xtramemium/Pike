import { BackgroundVideo, Header } from './components/index.js';
import { MainPage } from './pages/index.js';
export const App = () => {
	return (
		<div className="app-container">
			<BackgroundVideo />
			<Header />
			<MainPage />
		</div>
	);
};
