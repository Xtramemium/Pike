import {
	guest_image10,
	guest_image11,
	guest_image12,
	guest_image13,
	guest_image14,
	guest_image15,
	guest_image16,
	guest_image17,
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
		{ src: guest_image15 },
		{ src: guest_image8 },
		{ src: guest_image3 },
		{ src: guest_image4 },
		{ src: guest_image14 },
		{ src: guest_image5 },
		{ src: guest_image7 },
		{ src: guest_image9 },
		{ src: guest_image10 },
		{ src: guest_image11 },
		{ src: guest_image12 },
		{ src: guest_image13 },
		{ src: guest_image16 },
		{ src: guest_image17 },
	];
	return (
		<section className="gallery">
			<div className="gallery-wrapper"></div>
			<h2>{atmosphere}</h2>
			<Slider images={images} />
		</section>
	);
};
