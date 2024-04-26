import './gallery.css';
import {
	guest_image3,
	guest_image4,
	guest_image5,
	guest_image7,
	guest_image8,
} from '../../assets/assets';
import { Slider } from '../slider/slider.jsx';
import { atmosphere } from '../../constans';

export const Gallery = () => {
	const images = [
		{ src: guest_image3 },
		{ src: guest_image4 },
		{ src: guest_image5 },
		{ src: guest_image7 },
		{ src: guest_image8 },
	];
	return (
		<section className="gallery">
			<h2>{atmosphere}</h2>
			<Slider images={images} />
		</section>
	);
};
