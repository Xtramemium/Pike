/* eslint-disable react/prop-types */
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.css';

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
