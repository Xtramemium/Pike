import { Gallery, SliderMobile } from '../../Components';
import './MainPage.css';

export const MainPage = () => {
	return (
		<div className="main-page-wrapper">
			<main className="content">
				<h1 className="main-page-heading">Бар "Щука"</h1>
				<ul>
					<li>
						<a href="https://yandex.ru/maps/-/CDFfiOmB">
							Г. Люберцы ул 8 марта 18к1
						</a>
					</li>
					<li>
						<a href="tel:+79175483886">
							<span> +7 (917) 548-38-86</span>
						</a>
					</li>
					<li>
						<p>Бар, где каждый чувсвуствует себя как дома</p>
					</li>
				</ul>
				<section className="photos">
					<h2>Атмосфера нашего бара</h2>
					{/* <Gallery /> */}
					<SliderMobile />
				</section>
			</main>
		</div>
	);
};
