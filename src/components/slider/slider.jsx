/* eslint-disable react/prop-types */
import unknown_img from '../../assets/unknown_img.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import './slider.css';
import 'swiper/css/navigation';

export const Slider = ({ images = [] }) => (
	<Swiper
		images={images}
		modules={[Navigation]}
		navigation={true}
	>
		{images.map((image) => (
			<SwiperSlide key={image.src}>
				<img
					src={image.src}
					alt={image.alt}
				/>
			</SwiperSlide>
		))}
	</Swiper>
);
