import { useState, useEffect, useRef } from 'react';
import img2 from '../../assets/img2.webp';
import img3 from '../../assets/img3.webp';
import img11 from '../../assets/img11.webp';
import img12 from '../../assets/img12.webp';
import unknown_img from '../../assets/unknown_img.webp';
import Hammer from 'hammerjs';
import './Slider.css';

export const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const totalSlides = 4;
	const sliderImages = useRef(null);

	let initialPanX = 0;

	useEffect(() => {
		const hammer = new Hammer(sliderImages.current, {
			touchAction: 'pan-x',
		});

		hammer.on('panstart', handlePanStart);
		hammer.on('panmove', handlePanMove, { passive: true });

		return () => {
			hammer.off('panstart', handlePanStart);
			hammer.off('panmove', handlePanMove);
		};
	}, []);

	const handlePanStart = (event) => {
		initialPanX = event.center.x;
	};

	const handlePanMove = (event) => {
		const deltaX = event.center.x - initialPanX;

		const newSlide = Math.max(
			0,
			Math.min(totalSlides - 1, currentSlide + Math.round(deltaX / 100)),
		);

		setCurrentSlide(newSlide);
	};

	const prevSlide = () => {
		setCurrentSlide((oldCurrentSlide) => {
			let val = oldCurrentSlide - 1;
			if (val < 0) val = totalSlides - 1;
			return val;
		});
	};

	const nextSlide = () => {
		setCurrentSlide((oldCurrentSlide) => (oldCurrentSlide + 1) % totalSlides);
	};

	return (
		<div className="slider">
			<div
				className="slider-images"
				style={{ transform: `translateX(-${currentSlide * 100}%)` }}
				ref={sliderImages}
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
				</button>{' '}
				<button onClick={nextSlide}>
					<i className="fa-solid fa-chevron-right"></i>
				</button>
			</div>
		</div>
	);
};
