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
	console.log('props.images', props.images);
	return (
		<>
			<Swiper
				images={images}
				modules={[Navigation]}
				navigation={true}
				className=""
			>
				{images.map((image) => (
					<SwiperSlide key={image.src + Math.random()}>
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

/*const GalleryPropTypes = {
	img1: PropTypes.string.isRequired,
	img2: PropTypes.string.isRequired,
	img3: PropTypes.string.isRequired,
	img4: PropTypes.string.isRequired,
	img5: PropTypes.string.isRequired,
	img6: PropTypes.string.isRequired,
	unknownImg: PropTypes.string,
};

const SwiperSliderPropTypes = {
	galleryImgs: PropTypes.shape(GalleryPropTypes).isRequired,
};

SwiperSlider.propTypes = SwiperSliderPropTypes;
*/
