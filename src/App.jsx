import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import AgeVerification from './components/AgeVerification/AgeVerification';
import { MainPage } from './Pages';
import { ErrorPage } from './components';

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
