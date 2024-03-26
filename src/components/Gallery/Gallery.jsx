import './Gallery.css';
import img2 from '../../assets/img2.webp';
import img3 from '../../assets/img3.webp';
import img11 from '../../assets/img11.webp';
import img12 from '../../assets/img12.webp';
import img16 from '../../assets/img16.jpg';
import img17 from '../../assets/img17.jpg';
import { Slider } from '../Swiper/Slider';

export const Gallery = () => {
	const images = [
		{ src: img2 },
		{ src: img3 },
		{ src: img11 },
		{ src: img12 },
		{ src: img17 },
		{ src: img16 },
	];
	return (
		<section className="gallery">
			<h2>Атмосфера в нашем баре</h2>
			<Slider images={images} />
		</section>
	);
};
