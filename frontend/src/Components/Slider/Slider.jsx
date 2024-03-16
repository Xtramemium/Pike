import { useState } from 'react';
import img2 from '../../assets/img2.webp';
import img3 from '../../assets/img3.webp';
import img11 from '../../assets/img11.webp';
import img12 from '../../assets/img12.webp';
import unknown_img from '../../assets/unknown_img.webp';
import './Slider.css';

export const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const totalSlides = 4;

	const prevSlide = () => {
		setCurrentSlide((oldCurrentSlide) => {
			let val = oldCurrentSlide - 1;
			if (val < 0) val = totalSlides - 1;
			return val;
		});
	};

	const nextSlide = () => {
		setCurrentSlide((oldCurrentSlide) => (oldCurrentSlide + 1) % totalSlides,
		);
	};

	return (
		<div className="slider">
			<div
				className="slider-images"
				style={{ transform: `translateX(-${currentSlide * 100}%)` }}
			>
				<img
					className="gallery-img"
					src={img2}
					alt={unknown_img}
				/>
				<img
					className="gallery-img"
					src={img3}
					alt={unknown_img}
				/>
				<img
					className="gallery-img"
					src={img11}
					alt={unknown_img}
				/>
				<img
					className="gallery-img"
					src={img12}
					alt={unknown_img}
				/>
				<img
					className="gallery-img"
					src={img3}
					alt={unknown_img}
				/>
			</div>
			<div className="slider__buttons">
				{' '}
				<button onClick={prevSlide}>
					<i className="fa-solid fa-chevron-left"></i>
				</button>
				{' '}
				<button onClick={nextSlide}>
					<i className="fa-solid fa-chevron-right"></i>
				</button>
			</div>
		</div>
	);
};
