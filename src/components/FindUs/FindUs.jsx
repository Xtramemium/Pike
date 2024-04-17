import './FindUs.css';

export const FindUs = () => {
	return (
		<footer>
			<div className="FindUs__container">
				<div className="FindUs__yandex">
					<h2>Как нас найти</h2>
					<p>Г. Люберцы, Улица 8 марта 18к1</p>
					<iframe
						src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab1d56c0faefc782e1568cb8f93ca62fb814a5f2c49173ec4346940683b3b0e2e&amp;source=constructor"
						width="100%"
						height="500px"
					/>
				</div>
				<div
					className="FindUs__yandex"
					style={{
						overflow: 'hidden',
						position: 'relative',
					}}
				>
					<h2>Отзывы о нас</h2>
					<p>На яндекс картах</p>
					<iframe
						style={{
							width: '100%',
							height: '500px',
							border: '1px solid #e6e6e6',
							borderRadius: '8px',
							boxSizing: 'border-box',
						}}
						src="https://yandex.ru/maps-reviews-widget/13044241757?comments"
					></iframe>
					<a
						href="https://yandex.ru/maps/org/shchuka/13044241757/"
						target="_blank"
						style={{
							boxSizing: 'border-box',
							textDecoration: 'none',
							color: '#b3b3b3',
							fontSize: '10px',
							fontFamily: 'YS Text, sans-serif',
							padding: '0 20px',
							position: 'absolute',
							bottom: '8px',
							width: '100%',
							textAlign: 'center',
							left: '0',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							display: 'block',
							maxHeight: '14px',
							whiteSpace: 'nowrap',
						}}
					>
						Щука на карте Люберец — Яндекс Карты
					</a>
				</div>
			</div>
		</footer>
	);
};
