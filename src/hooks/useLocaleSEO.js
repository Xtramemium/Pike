// hooks/useLocalSEO.js - Хук для локального SEO бара
import { useMemo } from 'react';

export const useLocalSEO = () => {
	const businessData = useMemo(() => ({
		name: 'Бар Щука',
		description: 'Бар, где каждый чувствует себя как дома',
		address: {
			streetAddress: 'ул. 8 марта 18к1',
			addressLocality: 'Люберцы',
			addressRegion: 'Московская область',
			addressCountry: 'RU',
			postalCode: '140000'
		},
		geo: {
			latitude: 55.676098,
			longitude: 37.893326
		},
		telephone: '+7 (917) 548-38-86',
		url: 'https://shukabar.ru',
		openingHours: {
			weekdays: 'Mo-Th,Su 11:00-23:59',
			weekends: 'Fr-Sa 11:00-23:59'
		}
	}), []);

	// Генерируем structured data для LocalBusiness
	const localBusinessSchema = useMemo(() => ({
		'@context': 'https://schema.org',
		'@type': 'BarOrPub',
		name: businessData.name,
		description: businessData.description,
		url: businessData.url,
		telephone: businessData.telephone,
		address: {
			'@type': 'PostalAddress',
			...businessData.address
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: businessData.geo.latitude,
			longitude: businessData.geo.longitude
		},
		openingHoursSpecification: [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
				opens: '11:00',
				closes: '23:59'
			},
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Friday', 'Sunday'],
				opens: '11:00',
				closes: '23:59'
			}
		],
		priceRange: '$$',
		servesCuisine: ['Русская', 'Европейская', 'Закуски к пиву'],
		acceptsReservations: true,
		amenityFeature: [
			{
				'@type': 'LocationFeatureSpecification',
				name: 'Спортивные трансляции',
				value: true
			},
			{
				'@type': 'LocationFeatureSpecification',
				name: 'Wi-Fi',
				value: true
			}
		]
	}), [businessData]);

	// Функция для генерации SEO мета-тегов
	const generateSEOData = useMemo(() => (section = 'main') => {
		const seoData = {
			main: {
				title: 'Бар "Щука" Люберцы | Лучшее пиво и спортивные трансляции',
				description: `${businessData.description}. Лучшие сорта пива, вкусные закуски, спортивные трансляции в Люберцах. ${businessData.address.streetAddress}`,
				keywords: 'бар Щука, бар Люберцы, пиво Люберцы, спортивные трансляции'
			},
			menu: {
				title: 'Меню и пивная карта - Бар "Щука" Люберцы',
				description: 'Пивная карта с лучшими сортами пива со всей России и меню с вкусными закусками в баре Щука, Люберцы',
				keywords: 'пивная карта, меню бара, закуски к пиву, крафтовое пиво Люберцы'
			},
			broadcasts: {
				title: 'Спортивные трансляции - Бар "Щука" Люберцы',
				description: 'Смотрите спортивные трансляции в баре Щука в Люберцах. Футбол, хоккей и другие виды спорта в HD качестве',
				keywords: 'спортивные трансляции Люберцы, футбол, хоккей, спорт бар'
			}
		};

		return seoData[section] || seoData.main;
	}, [businessData]);

	return {
		businessData,
		localBusinessSchema,
		generateSEOData
	};
};

export default useLocalSEO;
