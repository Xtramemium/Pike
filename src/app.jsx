import { AgeVerification, MainPage } from './pages';
import SEO from './components/SEO/SEO.jsx';
import useLocalSEO from './hooks/useLocaleSEO.js';

export const App = () => {
	const { localBusinessSchema, generateSEOData } = useLocalSEO();
	const mainSEO = generateSEOData('main');

	return (
		<>
			<SEO
				title={mainSEO.title}
				description={mainSEO.description}
				keywords={mainSEO.keywords}
				structuredData={localBusinessSchema}
			/>
			<MainPage />
			<AgeVerification />
		</>
	);
};
