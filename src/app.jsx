import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { MainPage, ErrorPage, AgeVerification } from './pages';

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/age-verification"
					element={<AgeVerification />}
				/>
				<Route
					path="/MainPage"
					element={<MainPage />}
				/>
				<Route
					path="/AgeNotConfirmed"
					element={<ErrorPage />}
				/>
				<Route
					path="/"
					element={<Navigate to="/age-verification" />}
				/>
			</Routes>
		</BrowserRouter>
	);
};
