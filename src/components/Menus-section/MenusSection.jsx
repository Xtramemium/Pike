import {
	shrimp,
	wings,
	tarTar,
	potatoFry,
	beefCheeks,
	Mussels,
	Toast,
	barTapImage,
	default_image,
} from '../../assets/assets';
import './MenusSection.css';
import { Slider } from '../Swiper/Slider';
import {
	beerCard,
	beerCardDescription,
	beerCardLinkPhrase,
	menuCard,
	menuCardDescription,
	menuCardLinkPhrase,
} from '../../constans';

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
					href="https://drive.google.com/file/d/1n3KqO16hJPhkvawQ58j8rOahe0i0NPNf/view?usp=sharing"
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
					href="https://drive.google.com/file/d/1IipDeakXvQv8Mgt37k7YZhaKGf1fAvHs/view?usp=sharing"
					target="_blank"
				>
					{menuCardLinkPhrase}
				</a>
			</div>
		</section>
	);
};
