/* eslint-disable react/no-unescaped-entities */
import './SubHeading.css';

export const SubHeading = () => {
	return (
		<div>
			<main className="content">
				<h1 className="main-page-heading">Бар "Щука"</h1>
				<ul>
					<li>
						<a href="https://yandex.ru/maps/-/CDFfiOmB">Г. Люберцы ул 8 марта 18к1</a>
					</li>
					<li>
						<a href="tel:+79175483886">
							<span> +7 (917) 548-38-86</span>
						</a>
					</li>
				</ul>
				<div className="tagline">
					<p>
						<span className="hover-text">Бар, </span>
						<span className="hover-text">где </span>
						<span className="hover-text">каждый </span>
						<span className="hover-text">чувсвуствует </span>
						<span className="hover-text">себя </span>
						<span className="hover-text">как </span>
						<span className="hover-text">дома</span>
					</p>
				</div>
			</main>
		</div>
	);
};
