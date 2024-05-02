import {
	Mussels,
	Toast,
	barTapImage,
	beefCheeks,
	default_image,
	potatoFry,
	shrimp,
	tarTar,
	wings,
} from '../../assets/assets';
import {
	beerCard,
	beerCardDescription,
	beerCardLinkPhrase,
	menuBar,
	menuCard,
	menuCardDescription,
	menuCardLinkPhrase,
	menuKitchen,
} from '../../constans';
import { Slider } from '../slider/slider.jsx';
import './menus-section.css';

export const MenusSection = () => {
	const food = [
		{ src: Mussels },
		{ src: potatoFry },
		{ src: beefCheeks },
		{ src: shrimp },
		{ src: wings },
		{ src: tarTar },
		{ src: Toast },
	];

	return (
		<section className="menu-section">
			<div className="beer-section">
				<h2>{beerCard}</h2>
				<img
					src={barTapImage}
					alt={default_image}
				/>
				<p>{beerCardDescription}</p>
				<a
					href={menuBar}
					target="_blank"
				>
					{beerCardLinkPhrase}
				</a>
			</div>
			<div className="food-section">
				<h2>{menuCard}</h2>
				<Slider images={food} />
				<p>{menuCardDescription}</p>
				<a
					href={menuKitchen}
					target="_blank"
				>
					{menuCardLinkPhrase}
				</a>
			</div>
		</section>
	);
};
