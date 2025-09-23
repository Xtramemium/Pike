// components/SEO/SEO.jsx - SEO компонент для React
import React from 'react';
import PropTypes from 'prop-types';

export const SEO = ({
											title,
											description,
											keywords,
											image,
											url,
											type = 'website',
											structuredData
										}) => {
	// Базовые данные для бара "Щука"
	const defaultTitle = 'Бар "Щука" Люберцы | Лучшее пиво, спортивные трансляции';
	const defaultDescription = 'Бар Щука в Люберцах - уютное место с лучшими сортами пива, вкусными закусками и спортивными трансляциями. Адрес: ул. 8 марта 18к1';
	const defaultImage = 'https://shukabar.ru/images/og-image.jpg';
	const siteUrl = 'https://shukabar.ru';

	const pageTitle = title || defaultTitle;
	const pageDescription = description || defaultDescription;
	const pageImage = image || defaultImage;
	const pageUrl = url || siteUrl;

	// Используем document.head для мета-тегов (если нет react-helmet-async)
	React.useEffect(() => {
		// Обновляем title
		document.title = pageTitle;

		// Обновляем или создаем мета-теги
		const updateMetaTag = (name, content, property = false) => {
			const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
			let meta = document.querySelector(selector);

			if (!meta) {
				meta = document.createElement('meta');
				if (property) {
					meta.setAttribute('property', name);
				} else {
					meta.setAttribute('name', name);
				}
				document.head.appendChild(meta);
			}
			meta.setAttribute('content', content);
		};

		// Основные мета-теги
		updateMetaTag('description', pageDescription);
		if (keywords) updateMetaTag('keywords', keywords);

		// Open Graph
		updateMetaTag('og:title', pageTitle, true);
		updateMetaTag('og:description', pageDescription, true);
		updateMetaTag('og:url', pageUrl, true);
		updateMetaTag('og:image', pageImage, true);
		updateMetaTag('og:type', type, true);

		// Twitter Card
		updateMetaTag('twitter:title', pageTitle);
		updateMetaTag('twitter:description', pageDescription);
		updateMetaTag('twitter:image', pageImage);

		// Структурированные данные
		if (structuredData) {
			let scriptTag = document.querySelector('script[type="application/ld+json"]');
			if (!scriptTag) {
				scriptTag = document.createElement('script');
				scriptTag.type = 'application/ld+json';
				document.head.appendChild(scriptTag);
			}
			scriptTag.textContent = JSON.stringify(structuredData);
		}
	}, [pageTitle, pageDescription, pageImage, pageUrl, keywords, type, structuredData]);

	return null; // Этот компонент не рендерит UI
};

SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	keywords: PropTypes.string,
	image: PropTypes.string,
	url: PropTypes.string,
	type: PropTypes.string,
	structuredData: PropTypes.object,
};

export default SEO;
