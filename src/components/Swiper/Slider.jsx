/* eslint-disable react/prop-types */
import unknown_img from '../../assets/unknown_img.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import './Slider.css';
import 'swiper/css/navigation';

const defaultImgSrc = {
	src: '',
	alt: unknown_img,
};
export const Slider = (props) => {
	const { images = [] } = props;
	return (
		<>
			<Swiper
				images={images}
				modules={[Navigation]}
				navigation={true}
			>
				{images.map((image) => (
					<SwiperSlide key={image.src + Math.random() * 10 + 100}>
						<img
							src={image.src}
							alt={defaultImgSrc.alt}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};
