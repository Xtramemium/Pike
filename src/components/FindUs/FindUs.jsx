import './FindUs.css';

export const FindUs = () => {
	return (
		<div className="FindUs__container">
			<section>
				<h2>Как нас найти</h2>
				<p>Г. Люберцы, Улица 8 марта 18к1</p>
				<iframe
					src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab1d56c0faefc782e1568cb8f93ca62fb814a5f2c49173ec4346940683b3b0e2e&amp;source=constructor"
					width="100%"
					height="401"
					loading="lazy"
				/>
				<h2>Забронировать столик</h2>
				<p>
					{' '}
					<a href="tel:+79175483886">
						<span> +7 (917) 548-38-86</span>
					</a>
				</p>
			</section>
		</div>
	);
};
