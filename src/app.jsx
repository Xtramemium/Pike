import { AgeVerification, MainPage } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<MainPage />}
				/>
			</Routes>
			<AgeVerification/>
		</BrowserRouter>
	);
};
