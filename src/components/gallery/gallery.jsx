import {
	guest_image3,
	guest_image4,
	guest_image5,
	guest_image7,
	guest_image8,
	guest_image9,
} from '../../assets/assets';
import { atmosphere } from '../../constans';
import { Slider } from '../slider/slider.jsx';
import './gallery.css';

export const Gallery = () => {
	const images = [
		{ src: guest_image8 },
		{ src: guest_image3 },
		{ src: guest_image4 },
		{ src: guest_image5 },
		{ src: guest_image7 },
		{ src: guest_image9 },
	];
	return (
		<section className="gallery">
			<div className="gallery-wrapper"></div>
			<h2>{atmosphere}</h2>
			<Slider images={images} />
		</section>
	);
};
